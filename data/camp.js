(() => {
  const DECOR = [
    { id: "gatorskull",  name: "Alligator Skull",               items: [["alligator", "huid", 1]] },
    { id: "ramskull",    name: "Big Horn Ram Skull",            items: [["ram", "karkas", 1]] },
    { id: "cougarchest", name: "Cougar Pelt Covered Chest",     items: [["cougar", "huid", 2]] },
    { id: "boartable",   name: "Boar Skin Table Cover",         items: [["boar", "huid", 1]] },
    { id: "boarrug",     name: "Boar Skin Rug",                 items: [["boar", "huid", 4]] },
    { id: "oxrug",       name: "Ox Hide Rug",                   items: [["ox", "huid", 2]] },
    { id: "pronghtable", name: "Pronghorn Leather Table Tops",  items: [["pronghorn", "huid", 2]] },
    { id: "pronghskull", name: "Pronghorn Skull",               items: [["pronghorn", "karkas", 1]] },
    { id: "wolfskull",   name: "Wolf Skull",                    items: [["wolf", "karkas", 1]] },
    { id: "logseat",     name: "Campfire Log Seat Cover",       items: [["wolf", "huid", 2]] },
    { id: "banjo",       name: "Snake Skin Banjo Head",         items: [["snake", "huid", 2]] },
    { id: "campseat",    name: "Campfire Seat Cover",           items: [["beaver", "huid", 1], ["muskrat", "huid", 1], ["fox", "huid", 1]] },
    { id: "leanto",      name: "Lean-to Cow Hide Ground Cover", items: [["cow", "huid", 1]] },
    { id: "scoutfire",   name: "Scout Fire Ground Cover",       items: [["goat", "huid", 2]] },
    { id: "mooseant",    name: "Moose Antlers",                 items: [["moose", "gewei", 1]] },
    { id: "elkant",      name: "Elk Antlers",                   items: [["elk", "gewei", 1]] },
    { id: "bones",       name: "Hanging Bones",                 items: [["buck", "gewei", 1]] }
  ];
  const KINDS = { huid: "huid", karkas: "karkas", gewei: "gewei" };
  // Eén slot per fysiek item, gedeeld door de decoratiekaarten en de dierenlijst.
  const SLOTS = DECOR.flatMap(d => d.items.flatMap(([animal, kind, n]) =>
    Array.from({ length: n }, (_, j) => ({ key: `camp.item:${d.id}:${animal}:${kind}:${j + 1}`, decor: d, animal, kind, i: j + 1, n }))));
  const kindText = (a, kind) => {
    const name = RDR.animalLabel(a).toLowerCase();
    return kind === "huid" ? `Perfecte huid: ${name}` : kind === "karkas" ? `Perfect karkas: ${name}` : `Gewei: ${name}`;
  };
  const nth = s => (s.n > 1 ? ` (${s.i}/${s.n})` : "");

  RDR.list({
    id: "camp", title: "Kampdecoraties", order: 20,
    heading: "Kampdecoraties Checklist", sub: "Red Dead Redemption 2 (story mode): alle dierlijke items die Pearson nodig heeft om het kamp volledig te decoreren.", blurb: "Alle dierlijke items die Pearson nodig heeft om het kamp volledig te decoreren.",
    filter: "Verberg dieren die al compleet zijn",
    tips: [
    "<strong>Het dier moet al 3 sterren hebben.</strong> Het juiste wapen en een schone kill met één schot <em>behouden</em> die kwaliteit, maar maken een 1- of 2-sterrendier nooit perfect. Bestudeer het dier dus eerst.",
    "<strong>Karkassen niet villen.</strong> Voor de schedels van de ram, de pronghorn en de wolf wil Pearson het hele perfecte karkas. Leg het op je paard en rijd direct naar het kamp.",
    "<strong>Wolf en pronghorn: jaag er telkens 3.</strong> Van twee exemplaren gebruik je de huid, het derde breng je heel mee.",
    "<strong>Os, koe en geit zijn vee.</strong> Schiet ze buiten het zicht van boeren en andere getuigen, anders loop je kans op een bounty en verlies je honor.",
    "Voor het gewei heb je een <strong>mannetje</strong> nodig: een bull elk, een bull moose of een buck. Het gewei krijg je bij het villen.",
    "Je paard draagt maar één groot karkas of één grote huid tegelijk. Plan daarom korte ritten en breng alles direct naar Pearson. Karkassen bederven na verloop van tijd.",
    "De Boar Skin Rug vraagt 4 zwijnenhuiden. Als je ook de satchels maakt, heb je in totaal 6 perfecte zwijnenhuiden nodig.",
    "Pearson maakt alles alleen in het kamp (hoofdstuk 2 tot en met 6). Verzamel daarom alles vóór de epiloog."
  ],
    sources: [
    [
      "rdr2.org (Pearson crafting)",
      "https://www.rdr2.org/guides/pearson-crafting-guide/"
    ],
    [
      "rdr2.org forum (Pearson materials)",
      "https://www.rdr2.org/forums/topic/3979-red-dead-redemption-2-pearson-crafting-materials-guide/"
    ],
    [
      "GosuNoob (totalen)",
      "https://www.gosunoob.com/red-dead-redemption-2/crafting-ingredients-pearson-trapper/"
    ],
    [
      "PowerPyx (diervindplaatsen)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/"
    ],
    [
      "PowerPyx (perfecte huiden)",
      "https://www.powerpyx.com/red-dead-redemption-2-how-to-get-perfect-pelts/"
    ]
  ],
    sections: [
      { type: "checklist", title: "Eerst nodig", groups: [{ id: "prep", title: "Pearson",
        intro: "Deze decoraties zijn puur cosmetisch: ze geven geen nieuwe functies, alleen een mooier kamp. Huiden en karkassen moeten <strong>perfect</strong> zijn. Voor het gewei noemen de bronnen geen kwaliteitseis.",
        items: [{ id: "leather", key: "satchels.leather", name: "<strong>Leather Working Tools</strong> kopen via het kampboek (ledger) bij Pearsons wagen. Dit is dezelfde upgrade als voor de <a href=\"#/satchels\">satchels</a>." }] }] },
      { type: "custom", title: "Per decoratie",
        render: () => `<div class="grid">${DECOR.map(d => `
          <section class="card" data-decor="${d.id}">
            <div class="card-head"><h3>${d.name}</h3><span class="status"></span></div>
            <ul class="checks">
              ${SLOTS.filter(s => s.decor === d).map(s => `<li>${RDR.box(s.key, `${kindText(s.animal, s.kind)}${nth(s)}${RDR.tag(RDR.ANIMALS[s.animal].weapon)}`)}</li>`).join("")}
              <li class="sep">${RDR.box(`camp.craft:${d.id}`, "<strong>Gemaakt bij Pearson</strong>")}</li>
            </ul>
          </section>`).join("")}</div>`,
        refresh: (def, el) => DECOR.forEach(d => {
          const slots = SLOTS.filter(s => s.decor === d);
          const have = RDR.count(slots.map(s => s.key));
          const done = !!RDR.get(`camp.craft:${d.id}`);
          const card = el.querySelector(`[data-decor="${d.id}"]`);
          card.classList.toggle("done", done);
          card.querySelector(".status").textContent = done ? "✓ gemaakt" : have === slots.length ? "klaar om te maken" : `${have}/${slots.length} items`;
        }) },
      { type: "custom", title: "Boodschappenlijst per dier",
        intro: "Dezelfde vakjes als hierboven, gegroepeerd per diersoort. Een vinkje hier verschijnt ook bij de decoratie.",
        render: () => {
          const by = {};
          SLOTS.forEach(s => (by[s.animal] = by[s.animal] || []).push(s));
          return Object.keys(by).sort((a, b) => by[b].length - by[a].length || RDR.animalLabel(a).localeCompare(RDR.animalLabel(b)))
            .map(a => RDR.animalCard(a, by[a].length, by[a].map(s => `<li>${RDR.box(s.key, `voor ${s.decor.name}${nth(s)}${RDR.tag(KINDS[s.kind])}`)}</li>`).join(""))).join("");
        },
        refresh: () => RDR.refreshAnimalCards(RDR.pref("camp.hide")) },
      { type: "html", title: "Wapen per grootte", html: "<div class=\"card table-wrap\"> <table> <thead><tr><th>Grootte</th><th>Dieren</th><th>Beste wapen + munitie</th><th>Alternatief</th></tr></thead> <tbody> <tr><td>Tiny</td><td>Slang</td><td><strong>Boog + Small Game Arrows</strong></td><td>Varmint Rifle (kan de huid beschadigen)</td></tr> <tr><td>Small</td><td>Bever, muskusrat</td><td><strong>Varmint Rifle</strong> (gewone .22-munitie)</td><td>Boog + Small Game Arrows</td></tr> <tr><td>Medium</td><td>Vos</td><td><strong>Boog met gewone pijlen</strong></td><td>Varmint Rifle of repeater</td></tr> <tr><td>Big</td><td>Zwijn, wolf, poema, ram, pronghorn, geit, kleine alligator</td><td><strong>Springfield of Bolt Action Rifle</strong>, gewone munitie</td><td>Boog met gewone pijlen (of gifpijlen)</td></tr> <tr><td>Gigantic</td><td>Os, koe, volwassen alligator, moose, elk</td><td><strong>Rolling Block of Carcano (sniper)</strong>, gewone munitie</td><td>Springfield/Bolt Action, of boog met Improved Arrows</td></tr> </tbody> </table> </div>" }
    ],
    metrics: {
      items: () => RDR.ratio(SLOTS.map(s => s.key)),
      crafted: () => RDR.ratio(DECOR.map(d => `camp.craft:${d.id}`))
    },
    meters: [["items", "Items verzameld"], ["crafted", "Decoraties gemaakt"]],
    v1: { store: "rdr2-camp-decor-v1", map: k => k === "leather" ? "satchels.leather" : `camp.${k}` }
  });
})();
