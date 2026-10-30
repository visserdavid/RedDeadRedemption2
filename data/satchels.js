(() => {
  const SATCHELS = [
    { id: "valuables",   name: "Valuables Satchel",   pelts: ["deer", "beaver", "rabbit"],   req: "$50 doneren aan de kampkas" },
    { id: "materials",   name: "Materials Satchel",   pelts: ["deer", "boar", "iguana"],     req: "3 recepten maken bij het kampvuur" },
    { id: "provisions",  name: "Provisions Satchel",  pelts: ["deer", "bison", "raccoon"],   req: "De provisiewagen 2× upgraden" },
    { id: "kit",         name: "Kit Satchel",         pelts: ["deer", "elk", "panther"],     req: "3 waardevolle items doneren" },
    { id: "ingredients", name: "Ingredients Satchel", pelts: ["deer", "badger", "squirrel"], req: "5 karkassen doneren aan Pearson" },
    { id: "tonics",      name: "Tonics Satchel",      pelts: ["deer", "buck", "elk"],        req: "De medicijnwagen 2× upgraden" },
    { id: "legend",      name: "Legend of the East Satchel", pelts: ["deer", "wolf", "cougar"], req: "De andere 6 satchels gemaakt" }
  ];
  const peltKey = (s, a) => `satchels.pelt:${s}:${a}`;
  const label = a => RDR.animalLabel(a);
  const needs = () => {
    const n = {};
    SATCHELS.forEach(s => s.pelts.forEach(a => (n[a] = n[a] || []).push(s)));
    return n;
  };

  RDR.list({
    id: "satchels", title: "Satchels", order: 10,
    heading: "Satchel Pelt Checklist", sub: "Red Dead Redemption 2 (story mode): alle perfecte huiden die Pearson nodig heeft voor de 7 satchels.", blurb: "Alle perfecte huiden die Pearson nodig heeft voor de 7 satchels.",
    filter: "Verberg dieren die al compleet zijn",
    tips: [
    "<strong>Het dier moet al 3 sterren hebben.</strong> Het juiste wapen en een hoofdschot <em>behouden</em> de kwaliteit, maar maken een 1- of 2-sterrendier nooit perfect. Bestudeer het dier eerst met de verrekijker of door te richten en te bestuderen.",
    "<strong>Eén schot, één kill.</strong> Een tweede schot, het verkeerde wapen of explosieve/brandmunitie verlaagt de kwaliteit. Gebruik Dead Eye om de zwakke plek te zien: meestal het hoofd, soms het hart.",
    "Twijfel je over het wapen? Na het bestuderen toont het info-scherm van het dier het aanbevolen wapen.",
    "Gebruik <strong>gewone</strong> munitie. Split Point is prima, maar explosieve of brandmunitie verpest de huid.",
    "De <strong>eekhoorn</strong> is een karkas: niet villen, gewoon oppakken en meenemen.",
    "Je paard kan maar één grote huid tegelijk dragen. Breng ze daarom direct naar Pearson of jaag dicht bij het kamp. Huiden en karkassen bederven na verloop van tijd.",
    "Herten, bokken en de meeste kleine dieren spawnen vaak rond het kamp. Jaag daar het eerst op de 7 perfecte hertenhuiden.",
    "Pearson maakt de satchels alleen in het kamp (hoofdstuk 2 tot en met 6). Verzamel daarom alles vóór de epiloog. Wil je ook het kamp decoreren? Zie <a href=\"#/camp\">Kampdecoraties</a>."
  ],
    sources: [
    [
      "rdr2.org (Pearson crafting)",
      "https://www.rdr2.org/guides/pearson-crafting-guide/"
    ],
    [
      "PowerPyx (diervindplaatsen)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/"
    ],
    [
      "PowerPyx (perfecte huiden)",
      "https://www.powerpyx.com/red-dead-redemption-2-how-to-get-perfect-pelts/"
    ],
    [
      "HighGround Gaming",
      "https://www.highgroundgaming.com/rdr2-satchel-upgrade-guide/"
    ],
    [
      "Mein-MMO",
      "https://mein-mmo.de/en/how-to-get-perfect-pelts-in-red-dead-redemption-2,283915"
    ]
  ],
    sections: [
      { type: "checklist", title: "Eerst nodig", groups: [{ id: "prep", title: "Pearson",
        intro: "Elke satchel kost <strong>1 perfecte hertenhuid + 2 andere perfecte huiden</strong> en heeft een eigen voorwaarde. Legend of the East kan pas als de andere zes klaar zijn.",
        // Dezelfde upgrade als voor de kampdecoraties, dus één gedeeld vinkje.
        items: [{ id: "leather", key: "satchels.leather", name: "<strong>Leather Working Tools</strong> kopen via het kampboek (ledger) bij Pearsons wagen. Zonder deze upgrade kan Pearson geen satchels maken." }] }] },
      { type: "custom", title: "Per satchel",
        render: () => `<div class="grid">${SATCHELS.map(s => `
          <section class="card" data-satchel="${s.id}">
            <div class="card-head"><h3>${s.name}</h3><span class="status"></span></div>
            <ul class="checks">
              ${s.pelts.map(a => `<li>${RDR.box(peltKey(s.id, a), `Perfecte ${label(a).toLowerCase()}${a === "squirrel" ? " (karkas)" : ""}${RDR.tag(RDR.ANIMALS[a].weapon)}`)}</li>`).join("")}
              <li class="sep">${RDR.box(`satchels.req:${s.id}`, `<em>Voorwaarde:</em> ${s.req}`)}</li>
              <li>${RDR.box(`satchels.craft:${s.id}`, "<strong>Gemaakt bij Pearson</strong>")}</li>
            </ul>
          </section>`).join("")}</div>`,
        refresh: (def, el) => SATCHELS.forEach(s => {
          const have = RDR.count(s.pelts.map(a => peltKey(s.id, a)));
          const done = !!RDR.get(`satchels.craft:${s.id}`);
          const card = el.querySelector(`[data-satchel="${s.id}"]`);
          card.classList.toggle("done", done);
          card.querySelector(".status").textContent = done ? "✓ gemaakt"
            : have === s.pelts.length && RDR.get(`satchels.req:${s.id}`) ? "klaar om te maken" : `${have}/${s.pelts.length} huiden`;
        }) },
      { type: "custom", title: "Boodschappenlijst per dier",
        intro: "Dezelfde vakjes als hierboven, gegroepeerd per diersoort. Een vinkje hier verschijnt ook bij de satchel.",
        render: () => {
          const n = needs();
          return Object.keys(n).sort((a, b) => n[b].length - n[a].length || label(a).localeCompare(label(b)))
            .map(a => RDR.animalCard(a, n[a].length, n[a].map(s => `<li>${RDR.box(peltKey(s.id, a), `voor ${s.name.replace(" Satchel", "")}`)}</li>`).join(""))).join("");
        },
        refresh: () => RDR.refreshAnimalCards(RDR.pref("satchels.hide")) },
      { type: "html", title: "Wapen per grootte", html: "<div class=\"card table-wrap\"> <table> <thead><tr><th>Grootte</th><th>Dieren</th><th>Beste wapen + munitie</th><th>Alternatief</th></tr></thead> <tbody> <tr><td>Tiny</td><td>Eekhoorn</td><td><strong>Boog + Small Game Arrows</strong></td><td>Varmint Rifle (kan het karkas beschadigen)</td></tr> <tr><td>Small</td><td>Konijn, leguaan, wasbeer, das, bever</td><td><strong>Varmint Rifle</strong> (gewone .22-munitie)</td><td>Boog + Small Game Arrows</td></tr> <tr><td>Big</td><td>Hert, bok, wild zwijn, wolf, poema, panter</td><td><strong>Springfield of Bolt Action Rifle</strong>, gewone munitie</td><td>Boog met gewone pijlen (of gifpijlen)</td></tr> <tr><td>Gigantic</td><td>Wapiti (elk), bizon</td><td><strong>Rolling Block of Carcano (sniper)</strong>, gewone munitie</td><td>Springfield/Bolt Action, of boog met Improved Arrows</td></tr> </tbody> </table> </div>" }
    ],
    metrics: {
      pelts: () => RDR.ratio(SATCHELS.flatMap(s => s.pelts.map(a => peltKey(s.id, a)))),
      reqs: () => RDR.ratio(SATCHELS.map(s => `satchels.req:${s.id}`)),
      crafted: () => RDR.ratio(SATCHELS.map(s => `satchels.craft:${s.id}`))
    },
    meters: [["pelts", "Huiden verzameld"], ["reqs", "Voorwaarden voldaan"], ["crafted", "Satchels gemaakt"]],
    v1: { store: "rdr2-satchel-pelts-v1", map: k => k === "leather" ? "satchels.leather" : `satchels.${k}` }
  });
})();
