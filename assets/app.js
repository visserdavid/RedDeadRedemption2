// RDR2-checklists: één datagedreven app (index.html + #/<lijst> routes).
//
// Een lijst is één aanroep van RDR.list({...}) in data/*.js:
//   id, title, order       – route (#/id), naam in nav/overzicht, volgorde
//   nav?, heading?, blurb, sub – korte navnaam, paginakop, tekst op overzicht, ondertitel
//   tips?, sources?        – "Zo werkt het"-punten en bronnen [[label, url], ...]
//   filter?                – tekst voor de "verberg afgevinkt"-schakelaar (pref <id>.hide)
//   sections               – array (of functie die een array geeft) met { type, ... }:
//       checklist  groepen met vinkjes        { groups:[{ id, title, items, finish? }], fields?, columns?, grid?, numbered? }
//       cards      kaart per item             { id, items, fields?, layout?: "animal", checks? }
//       table      rijen met optioneel vinkje { id, rows, columns:[[kop, row => html, class?]], check?: false }
//       counters   tellers (−/+)              { groups:[{ id, title, items:[{ id, name, max, auto? }] }] }
//       html       vrije inhoud               { html }
//       custom     eigen weergave             { render(def), refresh(def, el) }
//   metrics        – { naam: () => ({ have, total }) }, op te vragen met RDR.metric("<id>.<naam>")
//   meters         – [["naam", "label"], ...] bovenaan de pagina en op het overzicht
//   v1?            – migratie van de oude opslag { store, map(oudeSleutel) => nieuweSleutel(s), prefs? }
//
// Opslagsleutels zijn stabiel: <lijst>.<groep/sectie>.<item-id>[.<vinkje>]; item-id = id of slug(name).
window.RDR = (() => {
  const STORE = "rdr2-v2";
  const lists = {};
  let home = { title: "", sub: "", html: "" };
  let current = null;

  // ---------- kleine helpers ----------
  const slug = s => String(s).replace(/<[^>]+>/g, "").replace(/['’]/g, "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " en ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  // Tuples → objecten volgens `fields`; een losse string wordt { name }.
  const rows = (fields, arr) => arr.map(r => typeof r === "string" ? { name: r }
    : Array.isArray(r) ? Object.fromEntries(fields.map((f, i) => [f, r[i]])) : r);
  const tag = t => `<span class="tag">${t}</span>`;
  const tags = t => (Array.isArray(t) ? t : t ? [t] : []).map(tag).join("");
  const box = (key, html) => `<label class="check"><input type="checkbox" data-key="${key}"><span>${html}</span></label>`;
  const pct = (have, total) => (total ? have / total * 100 : 0);
  const sum = (arr, f) => arr.reduce((n, x) => n + f(x), 0);

  // ---------- opslag ----------
  let state = { checks: {}, prefs: {} };
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify({ v: 2, checks: state.checks, prefs: state.prefs })); } catch (e) {}
  }
  const get = k => state.checks[k];
  const set = (k, v) => { if (v) state.checks[k] = v; else delete state.checks[k]; save(); };
  const count = keys => keys.filter(k => state.checks[k]).length;
  const pref = k => !!state.prefs[k];
  const setPref = (k, on) => { if (on) state.prefs[k] = true; else delete state.prefs[k]; save(); };

  // ---------- lijsten en normalisatie ----------
  const list = def => (lists[def.id] = def);
  const setHome = def => (home = def);
  const ordered = () => Object.values(lists).sort((a, b) => a.order - b.order);

  // Geeft de genormaliseerde secties van een lijst: items als objecten met een vaste sleutel.
  function sectionsOf(def) {
    if (def._sections) return def._sections;
    const L = def.id;
    const raw = typeof def.sections === "function" ? def.sections() : def.sections;
    const seen = new Set();
    const claim = k => { if (seen.has(k)) console.error(`Dubbele sleutel ${k}`); seen.add(k); return k; };
    const prepItems = (items, fields, prefix) => rows(fields, items).map(it => {
      it.id = it.id || slug(it.name);
      it.key = it.key || claim(`${prefix}.${it.id}`);
      return it;
    });

    def._sections = raw.map(s => {
      if (s.type === "checklist" || s.type === "counters") {
        const fields = s.fields || (s.type === "counters" ? ["id", "name", "max", "tag"] : ["name", "where", "tag"]);
        s.groups.forEach(g => {
          g.items = prepItems(g.items, fields, `${L}.${g.id}`);
          g.keys = g.items.map(it => it.key);
          g.finishKey = g.finish ? claim(`${L}.${g.id}.done`) : null;
        });
      } else if (s.type === "cards") {
        s.items = rows(s.fields || ["id", "name"], s.items).map(it => {
          it.id = it.id || slug(it.name);
          const checks = it.checks || s.checks || [{ id: "done", label: s.checkLabel || "Afgevinkt" }];
          it.checks = checks.map(c => ({ ...c, key: c.key || claim(`${L}.${s.id}.${it.id}${checks.length > 1 ? `.${c.id}` : ""}`) }));
          return it;
        });
      } else if (s.type === "table") {
        s.rows = rows(s.fields || ["id", "name"], s.rows).map(r => {
          r.id = r.id || slug(r.name);
          r.key = s.check === false ? null : (r.key || claim(`${L}.${s.id}.${r.id}`));
          return r;
        });
      }
      return s;
    });
    return def._sections;
  }

  // Zoekt een (genormaliseerde) groep of sectie op id binnen een lijst.
  function part(listId, id) {
    for (const s of sectionsOf(lists[listId])) {
      if (s.id === id) return s;
      const g = (s.groups || []).find(g => g.id === id);
      if (g) return g;
    }
    throw new Error(`Onbekend onderdeel ${listId}.${id}`);
  }
  // Alle vinkjessleutels van een groep (checklist), sectie (cards/table) of meerdere.
  function keysOf(listId, ...ids) {
    return ids.flatMap(id => {
      const p = part(listId, id);
      if (p.keys) return p.keys;
      if (p.items) return p.items.flatMap(it => it.checks.map(c => c.key));
      return p.rows.filter(r => r.key).map(r => r.key);
    });
  }
  // Items van groepen/secties, en alle groepen van een lijst (checklist en counters).
  const itemsOf = (listId, ...ids) => ids.flatMap(id => { const p = part(listId, id); return p.items || p.rows; });
  const groupsOf = listId => sectionsOf(lists[listId]).flatMap(s => s.groups || []);
  const metric = name => {
    const [id, m] = name.split(".");
    return lists[id].metrics[m]();
  };
  const ratio = keys => ({ have: count(keys), total: keys.length });
  const capped = (m, max) => ({ have: Math.min(m.have, max), total: max });

  // ---------- weergave-onderdelen ----------
  const meterHTML = (label, m) => `
    <div class="meter"><div class="label"><span>${label}</span><span class="num">${m.have} / ${m.total}</span></div>
    <div class="bar"><div style="width:${pct(m.have, m.total)}%"></div></div></div>`;
  const metersOf = def => (def.meters || []).map(([m, label]) => [label, metric(`${def.id}.${m}`)]);
  const filterHTML = (key, text) =>
    `<div class="filter"><label class="check"><input type="checkbox" data-pref="${key}"><span style="text-decoration:none;color:inherit">${text}</span></label></div>`;
  const counterHTML = (key, max, label) => `
    <span class="counter">
      <button type="button" data-step="-1" data-count="${key}" data-max="${max}" aria-label="${label} min één">−</button>
      <span class="n"><span data-n="${key}">0</span> / ${max}</span>
      <button type="button" data-step="1" data-count="${key}" data-max="${max}" aria-label="${label} plus één">+</button>
    </span>`;
  const itemLabel = (it, n, strong) =>
    `${n ? `${n}. ` : ""}${strong || it.strong ? `<strong>${it.name}</strong>` : it.name}${tags(it.tag || it.tags)}` +
    (it.need ? `<span class="where"><em>Nodig:</em> ${it.need}</span>` : "") +
    (it.where ? `<span class="where">${it.where}</span>` : "") +
    (it.note ? `<span class="where">${it.note}</span>` : "") +
    (it.link ? `<span class="where"><a href="${it.link[0]}">${it.link[1]}</a></span>` : "");
  const fieldsHTML = f => f && f.length
    ? `<dl class="small fields">${f.map(([dt, dd]) => `<dt>${dt}</dt><dd>${dd}</dd>`).join("")}</dl>` : "";

  // ---------- renderers ----------
  const R = {
    checklist: {
      html: (def, s) => `<div class="${s.grid ? "grid" : "stack"}">${s.groups.map(g => {
        const last = g.items.length - 1;
        return `
        ${s.groupHeadings ? `<h2>${g.title}</h2>` : ""}
        <section class="card group" data-group="${g.id}">
          <div class="card-head">${s.groupHeadings ? `<span class="small muted">${g.meta || ""}</span>` : `<h3>${g.title}</h3>`}<span class="status"></span></div>
          ${!s.groupHeadings && g.meta ? `<p class="small muted">${g.meta}</p>` : ""}
          ${g.reward ? `<p class="reward">Beloning: ${g.reward}</p>` : ""}
          ${g.intro ? `<p class="intro">${g.intro}</p>` : ""}
          <ul class="checks${s.columns ? " cols" : ""}">${g.items.map((it, i) => {
            const goal = s.goalLast && i === last;
            return `<li${goal ? ' class="sep"' : ""}>${box(it.key, itemLabel(it, s.numbered ? i + 1 : 0, goal))}</li>`;
          }).join("")}</ul>
          ${g.finish ? `<ul class="checks"><li class="sep">${box(g.finishKey, `<strong>${g.finish}</strong>`)}</li></ul>` : ""}
        </section>`;
      }).join("")}</div>`,
      refresh: (def, s, el) => {
        s.groups.forEach(g => {
          const card = el.querySelector(`[data-group="${g.id}"]`);
          const have = count(g.keys);
          const full = have === g.items.length && (!g.finishKey || !!get(g.finishKey));
          const st = s.status ? s.status(g, have) : { done: full, text: full ? "✓ compleet" : `${have}/${g.items.length}` };
          card.classList.toggle("done", st.done);
          card.querySelector(".status").textContent = st.text;
          if (s.highlightNext) {
            const next = g.keys.findIndex(k => !get(k));
            card.querySelector("ul.checks").querySelectorAll(":scope > li").forEach((li, i) => li.classList.toggle("next", i === next));
          }
        });
        el.classList.toggle("hide-checked", pref(`${def.id}.hide`));
      }
    },

    cards: {
      html: (def, s) => s.layout === "animal"
        ? s.items.map(it => `
          <section class="card animal" data-card="${it.id}">
            <div>
              <h3>${it.name}</h3>
              <div class="count">${it.sub ? `${it.sub} · ` : ""}<span class="have">0</span> / ${it.checks.length}</div>
              <ul class="checks boxes">${it.checks.map(c => `<li>${box(c.key, c.label)}</li>`).join("")}</ul>
            </div>
            <dl>${(it.fields || []).map(([dt, dd]) => `<dt>${dt}</dt><dd>${dd}</dd>`).join("")}</dl>
          </section>`).join("")
        : `<div class="grid">${s.items.map(it => `
          <section class="card" data-card="${it.id}">
            <div class="card-head"><h3>${it.name}</h3><span class="status"></span></div>
            ${it.tags ? `<p class="small">${tags(it.tags)}</p>` : ""}
            ${fieldsHTML(it.fields)}
            ${it.desc ? `<p class="small" style="margin-top:6px">${it.desc}</p>` : ""}
            ${it.note ? `<p class="small muted">${it.note}</p>` : ""}
            ${s.live ? `<p class="small" data-live></p>` : ""}
            <ul class="checks">${it.checks.map((c, i) =>
              `<li${i === it.checks.length - 1 ? ' class="sep"' : ""}>${box(c.key, c.label)}</li>`).join("")}</ul>
          </section>`).join("")}</div>`,
      refresh: (def, s, el) => {
        s.items.forEach(it => {
          const card = el.querySelector(`[data-card="${it.id}"]`);
          const have = count(it.checks.map(c => c.key));
          // Bij layout "animal" moeten alle vinkjes staan; anders telt het laatste vinkje (bijv. "Gemaakt").
          const done = s.layout === "animal" ? have === it.checks.length : !!get(it.checks[it.checks.length - 1].key);
          card.classList.toggle("done", done);
          card.hidden = pref(`${def.id}.hide`) && done;
          const have$ = card.querySelector(".have");
          if (have$) have$.textContent = have;
          const status = card.querySelector(".status");
          if (status) status.textContent = s.status ? s.status(it, done) : done ? (s.doneText || "✓") : "";
          const live = card.querySelector("[data-live]");
          if (live) live.innerHTML = s.live(it);
        });
      }
    },

    table: {
      html: (def, s) => `
        <div class="card table-wrap"><table>
          <thead><tr>${s.check !== false ? "<th></th>" : ""}${s.columns.map(c => `<th>${c[0]}</th>`).join("")}</tr></thead>
          <tbody>${s.rows.map(r => `<tr data-row="${r.id}">
            ${r.key ? `<td><input type="checkbox" data-key="${r.key}" aria-label="${r.name}"></td>` : ""}
            ${s.columns.map(c => `<td class="${c[2] || ""}">${c[1](r)}</td>`).join("")}
          </tr>`).join("")}</tbody>
        </table></div>`,
      refresh: (def, s, el) => {
        s.rows.forEach(r => {
          const row = el.querySelector(`[data-row="${r.id}"]`);
          const on = r.key ? !!get(r.key) : !!(s.rowDone && s.rowDone(r));
          row.classList.toggle("bought", on);
          row.hidden = (pref(`${def.id}.hide`) && on) || !!(s.hideRow && s.hideRow(r));
        });
      }
    },

    counters: {
      value: (s, g, it) => it.auto ? Math.min(metric(it.auto).have, it.max)
        : s.override ? s.override(g, it) : Math.min(get(it.key) || 0, it.max),
      html: (def, s) => `<div class="grid">${s.groups.map(g => `
        <section class="card" data-group="${g.id}">
          <div class="card-head"><h3>${g.title}</h3><span class="status"></span></div>
          ${g.items.map(it => {
            const single = it.max === 1 && !it.auto;
            return `
            <div class="row" data-row="${it.key}">
              ${single ? `<input type="checkbox" data-count="${it.key}" id="c-${slug(it.key)}">` : ""}
              <span class="what"><span>${single ? `<label for="c-${slug(it.key)}">${it.name}</label>` : it.name}</span>${tags(it.tag)}${it.link ? `<a href="${it.link}">details</a>` : ""}${it.hint ? `<span class="hint">${it.hint}</span>` : ""}${it.auto ? `<span class="hint auto">automatisch uit de lijst</span>` : ""}</span>
              ${it.auto ? `<span class="counter"><span class="n"><span data-auto="${it.key}">0</span> / ${it.max}</span></span>`
                : single ? "" : counterHTML(it.key, it.max, it.name)}
            </div>`;
          }).join("")}
          ${g.finish ? `<ul class="checks" style="margin-top:8px"><li class="sep">${box(g.finishKey, g.finish)}</li></ul>` : ""}
        </section>`).join("")}</div>`,
      refresh: (def, s, el) => {
        s.groups.forEach(g => {
          let full = 0;
          g.items.forEach(it => {
            const n = R.counters.value(s, g, it);
            const shown = el.querySelector(`[data-n="${it.key}"], [data-auto="${it.key}"]`);
            if (shown) shown.textContent = n;
            const cb = el.querySelector(`input[data-count="${it.key}"]`);
            if (cb) cb.checked = n >= it.max;
            el.querySelector(`[data-row="${it.key}"]`).classList.toggle("full", n >= it.max);
            if (n >= it.max) full++;
          });
          const done = g.finishKey ? !!get(g.finishKey) : full === g.items.length;
          const card = el.querySelector(`[data-group="${g.id}"]`);
          card.classList.toggle("done", done);
          card.querySelector(".status").textContent = s.status ? s.status(g, full, done) : done ? "✓ compleet" : `${full}/${g.items.length}`;
        });
      }
    },

    html: { html: (def, s) => s.html },
    custom: { html: (def, s) => s.render(def), refresh: (def, s, el) => s.refresh && s.refresh(def, el) }
  };

  // ---------- pagina's ----------
  const view = () => document.getElementById("view");

  function renderNav() {
    const here = current ? current.id : "";
    document.querySelector("nav").innerHTML = [["", "Overzicht"], ...ordered().map(d => [d.id, d.nav || d.title])]
      .map(([id, label]) => `<a href="#/${id}"${id === here ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  }

  function renderHome() {
    document.title = "RDR2 Checklists";
    view().innerHTML = `
      <header><h1>${home.title}</h1><p class="sub">${home.sub}</p></header>
      <h2>Alle lijsten</h2>
      <div class="grid dash">${ordered().map(d => {
        const meters = metersOf(d);
        const done = meters.length > 0 && meters.every(([, m]) => m.total > 0 && m.have === m.total);
        const main = meters[0] ? meters[0][1] : { have: 0, total: 0 };
        return `
        <section class="card${done ? " done" : ""}" data-list="${d.id}">
          <div class="card-head"><h3><a href="#/${d.id}">${d.title}</a></h3><span class="status">${done ? "✓ klaar" : `${Math.floor(pct(main.have, main.total))}%`}</span></div>
          <p>${d.blurb}</p>
          ${meters.map(([label, m]) => meterHTML(label, m)).join("")}
          <a class="open" href="#/${d.id}">Open lijst →</a>
        </section>`;
      }).join("")}</div>
      ${home.html}
      <footer>Je voortgang wordt alleen in deze browser bewaard (localStorage). Elke lijst heeft onderaan een eigen resetknop en een overzicht van de gebruikte bronnen.</footer>`;
  }

  function renderList(def) {
    const heading = def.heading || `${def.title} Checklist`;
    document.title = `${heading} – RDR2`;
    view().innerHTML = `
      <header>
        <h1>${heading}</h1>
        <p class="sub">${def.sub}</p>
        <div class="progress" id="meters"></div>
      </header>
      ${def.tips ? `<h2>Zo werkt het</h2><div class="card"><ul class="tips">${def.tips.map(t => `<li>${t}</li>`).join("")}</ul></div>` : ""}
      ${def.filter ? `<div style="margin-top:24px">${filterHTML(`${def.id}.hide`, def.filter)}</div>` : ""}
      ${sectionsOf(def).map((s, i) => `
        ${s.title ? `<h2>${s.title}</h2>` : ""}
        ${s.intro ? `<p class="muted small">${s.intro}</p>` : ""}
        ${s.filter ? filterHTML(`${def.id}.${s.filter[0]}`, s.filter[1]) : ""}
        <div data-sec="${i}" class="sec">${R[s.type].html(def, s)}</div>`).join("")}
      <p style="margin-top:24px"><button id="reset">Alles resetten</button></p>
      <footer>Bronnen: ${(def.sources || []).map(([label, url]) => `<a href="${url}">${label}</a>`).join(", ")}.
        Je voortgang wordt alleen in deze browser bewaard. De resetknop wist alleen de vinkjes en tellers op deze pagina.</footer>`;
  }

  function refresh() {
    if (!current) return;
    const v = view();
    v.querySelectorAll("input[data-key]").forEach(i => {
      i.checked = !!get(i.dataset.key);
      const li = i.closest("li");
      if (li) li.classList.toggle("got", i.checked);
    });
    v.querySelectorAll("[data-n]").forEach(el => { el.textContent = get(el.dataset.n) || 0; });
    v.querySelectorAll("input[data-pref]").forEach(i => { i.checked = pref(i.dataset.pref); });
    sectionsOf(current).forEach((s, i) => {
      if (R[s.type].refresh) R[s.type].refresh(current, s, v.querySelector(`[data-sec="${i}"]`));
    });
    if (current.refresh) current.refresh(v);
    document.getElementById("meters").innerHTML = metersOf(current).map(([label, m]) => meterHTML(label, m)).join("");
  }

  function route() {
    const id = location.hash.replace(/^#\/?/, "");
    current = lists[id] || null;
    renderNav();
    if (current) renderList(current); else renderHome();
    refresh();
    window.scrollTo(0, 0);
  }

  function bindEvents() {
    document.addEventListener("change", e => {
      const t = e.target;
      if (t.dataset.key) set(t.dataset.key, t.checked);
      else if (t.dataset.count) set(t.dataset.count, t.checked ? 1 : 0);
      else if (t.dataset.pref) setPref(t.dataset.pref, t.checked);
      else return;
      refresh();
    });
    document.addEventListener("click", e => {
      const b = e.target.closest("button[data-step]");
      if (b) {
        const k = b.dataset.count;
        set(k, Math.max(0, Math.min(Number(b.dataset.max), (get(k) || 0) + Number(b.dataset.step))));
        refresh();
      } else if (e.target.id === "reset") {
        if (!confirm("Weet je zeker dat je alle vinkjes en tellers op deze pagina wilt wissen?")) return;
        view().querySelectorAll("[data-key], [data-count]").forEach(el => delete state.checks[el.dataset.key || el.dataset.count]);
        save();
        refresh();
      }
    });
    window.addEventListener("hashchange", route);
  }

  // ---------- migratie van de oude opslag (één localStorage-sleutel per lijst, v1) ----------
  const v1 = {
    // "groep:3" → derde item van die groep, "groep:finish" → afsluitend vinkje van die groep.
    byIndex: listId => k => {
      const [g, i] = k.split(":");
      try {
        const grp = part(listId, g);
        if (i === "finish") return grp.finishKey;
        const it = grp.items && grp.items[Number(i) - 1];
        return it ? it.key : null;
      } catch (e) { return null; }
    },
    // id → sleutel van het item met die id in een groep/sectie (bij kaarten: het laatste vinkje).
    byId: (listId, partId) => id => {
      const p = part(listId, partId);
      const it = (p.items || p.rows).find(x => x.id === id);
      return !it ? null : it.checks ? it.checks[it.checks.length - 1].key : it.key;
    }
  };

  function migrate() {
    try {
      const s = JSON.parse(localStorage.getItem(STORE));
      if (s && s.v === 2) { state = { checks: s.checks || {}, prefs: s.prefs || {} }; return; }
    } catch (e) {}
    Object.values(lists).forEach(def => {
      if (!def.v1) return;
      const { store, map, prefs } = def.v1;
      let old = null;
      try { old = JSON.parse(localStorage.getItem(store)); } catch (e) {}
      if (old && map) Object.entries(old).forEach(([k, v]) => {
        const nk = map(k, v);
        (Array.isArray(nk) ? nk : nk ? [nk] : []).forEach(x => { state.checks[x] = v; });
      });
      (prefs || [["hide", "hide"]]).forEach(([o, n]) => {
        try { if (localStorage.getItem(`${store}:${o}`) === "1") state.prefs[`${def.id}.${n}`] = true; } catch (e) {}
      });
    });
    save();
  }

  function start() {
    migrate();
    bindEvents();
    route();
  }

  return {
    list, setHome, lists, start,
    slug, rows, tag, tags, box, sum,
    get, count, pref, keysOf, itemsOf, groupsOf, part, metric, ratio, capped, v1
  };
})();
