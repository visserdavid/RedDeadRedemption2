(() => {
  const herbs = [
    ["alaskanginseng", "Alaskan Ginseng",      "Bossen en vochtige plekken in Ambarino en het noordwesten van West Elizabeth. Herkenbaar aan rode bessen.", "Potent Miracle Tonic"],
    ["americanginseng","American Ginseng",     "Bossen en vochtige plekken in West Elizabeth en aan de randen van New Hanover. Rode bessen.", "Potent Miracle Tonic"],
    ["baybolete",      "Bay Bolete",           "Paddenstoel. Tall Trees (West Elizabeth) en bij de rivier rond Caliban's Seat.", "Potent Predator Bait"],
    ["blackberry",     "Blackberry",           "Struiken bij heuvels en bossen, bijna overal.", "Potent Herbivore Bait"],
    ["blackcurrant",   "Blackcurrant",         "Zonnige plekken in Gaptooth Ridge en Cholla Springs.", "Special Snake Oil", "Epiloog"],
    ["burdock",        "Burdock Root",         "Great Plains, langs rivieroevers en het spoor.", "Special Bitters"],
    ["chanterelles",   "Chanterelles",         "Gele paddenstoelen in de graslanden en bossen van Lemoyne en het oosten van New Hanover.", "Potent Herbivore Bait"],
    ["bulrush",        "Common Bulrush",       "Langs beken en meren in alle regio's.", "Horse Ointment"],
    ["thyme",          "Creeping Thyme",       "Overal, op zanderige grond bij rotsen en rivieroevers.", "Kruiden voor vlees"],
    ["desertsage",     "Desert Sage",          "Alleen in het westen van Gaptooth Ridge. Paarse bloemen.", "Horse Ointment", "Epiloog"],
    ["englishmace",    "English Mace",         "Ten oosten van O'Creagh's Run. In de epiloog ook bij Rio Bravo. Gele bloemen.", "Special Health Cure"],
    ["huckleberry",    "Evergreen Huckleberry","Langs de hele Kamassa River, door Lemoyne en New Hanover.", "Potent Predator Bait"],
    ["goldencurrant",  "Golden Currant",       "Langs beken in West Elizabeth en het noordoosten van New Hanover. Goudkleurige bessen.", "Special Snake Oil"],
    ["hummingbird",    "Hummingbird Sage",     "Dichte begroeiing in Lemoyne, het westen van West Elizabeth en langs de Kamassa River.", "Kruiden voor vlees"],
    ["tobacco",        "Indian Tobacco",       "Bossen en savannes in West Elizabeth, Ambarino en Lemoyne. Hoge plant, van ver te zien.", "Potent Miracle Tonic"],
    ["milkweed",       "Milkweed",             "Lemoyne: Bayou Nwa, Dewberry Creek en de moerassen rond Saint Denis.", "Herstelt je Health-core"],
    ["oleander",       "Oleander Sage",        "Rond Saint Denis en langs de oevers in Bayou Nwa. Roze bloemen.", "Gifpijlen en gifwerpmessen"],
    ["oregano",        "Oregano",              "Droge graslanden, bijna overal.", "Kruiden voor vlees"],
    ["parasol",        "Parasol Mushroom",     "Bossen met goed doorlatende grond, verspreid over de kaart. Bleke paddenstoel.", "Special Horse Reviver"],
    ["poppy",          "Prairie Poppy",        "Great Plains (West Elizabeth), vooral langs het spoor. Gele bloemen.", "Special Snake Oil"],
    ["ramshead",       "Ram's Head",           "Paddenstoel aan de voet van bomen in de bossen van West Elizabeth en Ambarino.", "Potent Herbivore Bait"],
    ["raspberry",      "Red Raspberry",        "Grote struiken, bijna overal.", "Herbivore en Predator Bait"],
    ["redsage",        "Red Sage",             "Alleen bij Rio Bravo (New Austin). Rode bloemen.", "Kruiden voor vlees", "Epiloog"],
    ["vanilla",        "Vanilla Flower",       "Op boomschors langs de oevers in Bayou Nwa (Lemoyne).", "Potent Herbivore Bait"],
    ["snowdrops",      "Violet Snowdrops",     "Noord-Ambarino, bij de sneeuw maar niet erin. Zeldzaam.", "Potent Herbivore Bait"],
    ["carrot",         "Wild Carrot",          "Bijna overal, vooral op de vlaktes. Witte bloemschermen.", "Herstelt je paard, Horse Meal"],
    ["feverfew",       "Wild Feverfew",        "Cholla Springs (New Austin). Kleine witte blaadjes.", "Herstelt je Stamina-core", "Epiloog"],
    ["mint",           "Wild Mint",            "Bij beken, moerassen en vochtige weides, overal. Bijvoorbeeld langs de weg naar het noordwesten vanuit Strawberry.", "Kruiden voor vlees"],
    ["wintergreen",    "Wintergreen Berry",    "De koudste gebieden van Noordoost-Ambarino en New Hanover. Rode bessen.", "Potent Predator Bait"],
    ["yarrow",         "Yarrow",               "Graslanden en open bossen in New Hanover en Lemoyne. Rode bloemen.", "Potent Health Cure"]
  ];
  // De 13 orchideeën komen uit de Exotics-opdrachten.
  const orchids = () => RDR.lists.exotics.requests.flatMap(r => r.items.filter(it => /Orchid/.test(it[1])).map(it => [r, it]));
  RDR.list({
    id: "plants", title: "Planten", order: 80,
    heading: "Planten Checklist", sub: "Red Dead Redemption 2 (story mode): alle 43 plantensoorten, de 30 kruiden en de 13 orchideeën, met vindplaats en gebruik.", blurb: "Alle 43 plantensoorten: 30 kruiden voor Herbalist 9 en 13 orchideeën. 20 soorten zijn nodig voor 100%.",
    filter: "Verberg planten die je al hebt geplukt",
    tips: [
    "Voor 100% moet je <strong>20 van de 43 soorten</strong> in het compendium hebben. Dat aantal gaat automatisch naar de pagina <a href=\"#/hundred\">100%</a>.",
    "<strong>Herbalist 9</strong> (zie <a href=\"#/challenges\">Uitdagingen</a>) vraagt één exemplaar van alle <strong>30 kruiden</strong>, zonder orchideeën. Planten die je plukte <em>voordat</em> je die uitdaging had, tellen niet. Vier kruiden groeien alleen in New Austin, dus Herbalist 9 rond je in de epiloog af.",
    "Waar je de kruiden voor gebruikt, staat bij elk kruid. De volledige recepten staan op <a href=\"#/recipes\">Recepten</a>.",
    "Planten lichten op in <strong>Eagle Eye</strong>. Geplukte planten groeien na verloop van tijd terug.",
    "Met de <a href=\"#/trinkets\">Ram Horn Trinket</a> (van de legendarische bighorn ram) pluk je van sommige kruiden dubbel zoveel.",
    "De orchideeën heb je ook nodig voor de <a href=\"#/exotics\">Exotics</a> van Algernon Wasp. Hoeveel je daar al hebt, zie je hieronder per orchidee."
  ],
    sources: [
    [
      "rdr2.org (kruiden en orchideeën)",
      "https://www.rdr2.org/guides/herbs-and-orchids-guide/"
    ],
    [
      "rdr2.org (Herbalist)",
      "https://www.rdr2.org/guides/herbalist-challenge-guide/"
    ],
    [
      "PowerPyx (alle 43 planten)",
      "https://www.powerpyx.com/red-dead-redemption-2-plants-locations/"
    ]
  ],
    sections: () => [
      { type: "checklist", title: "Kruiden (30)", columns: true, groups: [{ id: "herbs", title: "Kruiden",
        items: herbs.map(([id, name, where, use, tag]) => ({ id, name, where, note: `<em>Gebruik:</em> ${use}`, tag })) }] },
      { type: "checklist", title: "Orchideeën (13)", columns: true,
        intro: "Orchideeën groeien vooral in de moerassen van Lemoyne (Bayou Nwa, Bluewater Marsh) en in Roanoke Ridge, aan bomen of op de grond (zie de tag). Hoeveel je er al hebt voor de <a href=\"#/exotics\">Exotics</a>, staat erbij.",
        groups: [{ id: "orchids", title: "Orchideeën", items: orchids().map(([r, [id, name, need, tag]]) => ({
          id, name, tag, where: `Exotics ${r.name.toLowerCase()}: <span data-exotic="${r.id}.${id}"></span> / ${need}`
        })) }] }
    ],
    // Live telling uit de Exotics-lijst bij elke orchidee.
    refresh: view => view.querySelectorAll("[data-exotic]").forEach(el => {
      const [rid, id] = el.dataset.exotic.split(".");
      el.textContent = RDR.lists.exotics.value(rid, id);
    }),
    metrics: {
      herbs: () => RDR.ratio(RDR.keysOf("plants", "herbs")),
      orchids: () => RDR.ratio(RDR.keysOf("plants", "orchids")),
      species: () => RDR.capped(RDR.ratio(RDR.keysOf("plants", "herbs", "orchids")), 20)
    },
    meters: [["herbs", "Kruiden geplukt"], ["orchids", "Orchideeën geplukt"], ["species", "Soorten voor 100% (20 nodig)"]],
    v1: {
      store: "rdr2-plants-v1",
      map: k => k.startsWith("herb:") ? RDR.v1.byId("plants", "herbs")(k.slice(5))
        : k.startsWith("orchid:") ? RDR.v1.byId("plants", "orchids")(k.slice(7)) : null
    }
  });
})();
