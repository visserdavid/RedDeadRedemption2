(() => {
  const groups = [
    { id: "tonics", title: "Tonics", items: [
      ["Potent Bitters",        "1 Sage, 1 Burdock Root",                        "Vanaf het begin"],
      ["Potent Health Cure",    "1 Ginseng, 1 Yarrow",                           "Vanaf het begin"],
      ["Potent Miracle Tonic",  "4 Indian Tobacco, 4 Ginseng, 4 Sage",           "Vanaf het begin"],
      ["Potent Snake Oil",      "1 Indian Tobacco",                              "Vanaf het begin"],
      ["Special Bitters",       "2 Sage, 1 Burdock Root",                        "Pamflet bij de Fence, na hoofdstuk 2", "Pamflet"],
      ["Special Health Cure",   "2 Ginseng, 2 Yarrow, 2 English Mace of 2 Milkweed", "Na de missie <em>American Distillation</em>"],
      ["Special Miracle Tonic", "6 Currant, 6 Yarrow, 4 Burdock Root",           "Na de missie <em>A Short Walk in a Pretty Town</em>"],
      ["Special Snake Oil",     "2 Indian Tobacco, 2 Currant of 2 Prairie Poppy","Na de missie <em>American Distillation</em>"]
    ] },
    { id: "arrows", title: "Pijlen", items: [
      ["Improved Arrow",    "1 Arrow, 1 Flight Feather",                   "Automatisch aan het begin van hoofdstuk 2"],
      ["Fire Arrow",        "1 Arrow, 1 Animal Fat, 1 Flight Feather",     "Automatisch aan het begin van hoofdstuk 2"],
      ["Small Game Arrow",  "1 Arrow, 1 Flight Feather, 1 Shotgun Shell",  "Automatisch aan het begin van hoofdstuk 2"],
      ["Poison Arrow",      "1 Arrow, 1 Oleander Sage, 1 Flight Feather",  "Pamflet bij de Fence na hoofdstuk 2, of in een kist bij de Mysterious Hill Home (ten noordoosten van Bacchus Station)", "Pamflet"],
      ["Dynamite Arrow",    "1 Arrow, 1 Dynamite, 1 Flight Feather",       "Pamflet bij de Fence na <em>A Short Walk in a Pretty Town</em>, of in een kist bij de houten brug in het zuiden van het Wapiti-reservaat", "Pamflet"]
    ] },
    { id: "ammo", title: "Munitie", items: [
      ["Revolver Cartridge – Split Point", "1 Revolver Cartridge",           "Vanaf hoofdstuk 2"],
      ["Pistol Cartridge – Split Point",   "1 Pistol Cartridge",             "Vanaf hoofdstuk 2"],
      ["Repeater Cartridge – Split Point", "1 Repeater Cartridge",           "Vanaf hoofdstuk 2"],
      ["Rifle Cartridge – Split Point",    "1 Rifle Cartridge",              "Vanaf hoofdstuk 2"],
      ["Revolver Cartridge – Explosive",   "1 Revolver Cartridge Express, 1 Animal Fat", "Vanaf hoofdstuk 2"],
      ["Pistol Cartridge – Explosive",     "1 Pistol Cartridge, 1 Animal Fat",   "Vanaf hoofdstuk 2"],
      ["Repeater Cartridge – Explosive",   "1 Repeater Cartridge, 1 Animal Fat", "Vanaf hoofdstuk 2"],
      ["Rifle Cartridge – Explosive",      "1 Rifle Cartridge, 1 Animal Fat",    "Vanaf hoofdstuk 2"],
      ["Shotgun Slug – Explosive",         "1 Shotgun Shell, 1 Animal Fat",      "Pamflet bij de Fence na <em>A Short Walk in a Pretty Town</em>, of bij een afgebrand huis tussen Gaptooth Ridge en Cholla Springs (epiloog)", "Pamflet"],
      ["Shotgun Shell – Incendiary Buckshot", "1 Shotgun Shell, 1 Moonshine",    "Pamflet bij de Fence na <em>Pouring Forth Oil</em>, of onder de vloer van een hut bij Copperhead Landing", "Pamflet"]
    ] },
    { id: "throw", title: "Werpwapens en explosieven", items: [
      ["Improved Throwing Knife", "1 Throwing Knife, 2 Eagle of Hawk Feathers", "Automatisch in hoofdstuk 2"],
      ["Poison Throwing Knife",   "1 Throwing Knife, 1 Oleander Sage",          "Pamflet bij de Fence na <em>Pouring Forth Oil</em>, of onder de vloer van een hut ten noordoosten van Saint Denis", "Pamflet"],
      ["Improved Tomahawk",       "1 Tomahawk, 1 Eagle of Hawk Feather",        "Automatisch in hoofdstuk 2"],
      ["Homing Tomahawk",         "1 Tomahawk, 1 Owl Feather",                  "Pamflet bij de Fence na hoofdstuk 2, of in een kist in de ingestorte hut ten zuiden van Moonstone Pond", "Pamflet"],
      ["Fire Bottle",             "1 Animal Fat, 1 Gin (of Bourbon, Rum, Brandy)", "Automatisch in hoofdstuk 2"],
      ["Volatile Fire Bottle",    "1 Moonshine, 1 Animal Fat",                  "Pamflet bij de Fence na <em>Pouring Forth Oil</em>, of in een verlaten kamp ten noordwesten van Horseshoe Overlook", "Pamflet"],
      ["Volatile Dynamite",       "1 Dynamite, 1 Animal Fat, 1 High Velocity Cartridge", "Pamflet bij de Fence na <em>American Distillation</em>, of in een kist bij Hani's Bethel", "Pamflet"]
    ] },
    { id: "hunting", title: "Jacht", items: [
      ["Predator Bait",          "1 Stringy Meat, 1 Blackberry",                 "Aan het begin van hoofdstuk 2"],
      ["Potent Predator Bait",   "1 Gritty Fish Meat, 1 Blackberry",             "Aan het begin van hoofdstuk 2"],
      ["Potent Herbivore Bait",  "1 Vanilla Flower, 1 Violet Snowdrop, 1 Bay Bolete", "Aan het begin van hoofdstuk 2"],
      ["Cover Scent Lotion",     "1 Scent Glands",                               "Aan het begin van hoofdstuk 2"]
    ] },
    { id: "horse", title: "Paardenverzorging", items: [
      ["Potent Horse Medicine",   "1 Ginseng, 1 Common Bulrush",                 "Aan het begin van hoofdstuk 2"],
      ["Potent Horse Stimulant",  "1 Sage, 1 Common Bulrush",                    "Aan het begin van hoofdstuk 2"],
      ["Horse Ointment",          "1 Sage, 1 Common Bulrush, 1 Yarrow",          "Aan het begin van hoofdstuk 2"],
      ["Horse Meal",              "3 Hay of 3 Beets",                            "Pamflet bij de Fence, na <em>Pouring Forth Oil</em>", "Pamflet"],
      ["Special Horse Medicine",  "2 Ginseng, 2 Common Bulrush, 2 Wild Carrot",  "Pamflet bij de Fence", "Pamflet"],
      ["Special Horse Stimulant", "2 Sage, 2 Common Bulrush, 2 Wild Carrot",     "Pamflet bij de Fence", "Pamflet"],
      ["Special Horse Reviver",   "2 Ginseng, 2 Mushrooms, 2 Wild Carrot",       "Pamflet bij de Fence, na <em>American Distillation</em>", "Pamflet"]
    ] }
  ];
  // Vleessoorten om te kruiden en te bakken (Herbalist 10). Volgorde ongewijzigd i.v.m. migratie.
  const meats = ["Big Game Meat", "Prime Beef Joint", "Tender Pork Loin", "Gristly Mutton", "Mature Venison", "Game Meat",
    "Stringy Meat", "Plump Bird Meat", "Gamey Bird Meat", "Exotic Bird Meat", "Herptile Meat",
    "Flaky Fish Meat", "Succulent Fish Meat", "Crustacean Meat"];
  const crafted = () => groups.flatMap(g => RDR.keysOf("recipes", g.id));
  RDR.list({
    id: "recipes", title: "Recepten", order: 90,
    heading: "Recepten Checklist", sub: "Red Dead Redemption 2 (story mode): alle recepten die je bij het kampvuur maakt, met ingrediënten en hoe je ze vrijspeelt, plus koken.", blurb: "Alle craftrecepten bij het kampvuur, met ingrediënten en hoe je ze vrijspeelt, plus de vleessoorten om te koken.",
    filter: "Verberg recepten die je al hebt gemaakt",
    tips: [
    "Je maakt recepten bij een <strong>kampvuur</strong>, in het kamp van de bende of bij je eigen kampement. De ingrediënten zijn planten (zie <a href=\"#/plants\">Planten</a>), dierlijke producten en munitie.",
    "Recepten met de tag <strong>Pamflet</strong> moet je eerst leren. Koop het pamflet bij een Fence of vind het op de genoemde plek, en <strong>lees het daarna in je inventaris</strong>. Pas dan kun je het recept maken.",
    "Voor 100% moet je <strong>6 recepten</strong> maken. Dat aantal gaat automatisch naar de pagina <a href=\"#/hundred\">100%</a>.",
    "Ook veel <a href=\"#/challenges\">uitdagingen</a> vragen om iets te maken. Bij <strong>Herbalist</strong>: items met Sage (3), met Indian Tobacco (5), Special Miracle Tonics (7), gifwapens met Oleander (8) en alle vleessoorten kruiden (10). Bij <strong>Survivalist</strong>: alle soorten pijlen (4) en de verbeterde tomahawks en vluchtige explosieven (8)."
  ],
    sources: [
    [
      "rdr2.org (craftrecepten)",
      "https://rdr2.org/guides/cooking-and-crafting-guide/3"
    ],
    [
      "rdr2.org (jacht en paard)",
      "https://www.rdr2.org/guides/cooking-and-crafting-guide/4/"
    ],
    [
      "rdr2.org (koken)",
      "https://www.rdr2.org/guides/cooking-and-crafting-guide/2/"
    ],
    [
      "rdr2.org (overzicht)",
      "https://www.rdr2.org/guides/cooking-and-crafting-guide/"
    ]
  ],
    sections: [
      // Ingrediënten als "Nodig:", hoe je het recept vrijspeelt eronder.
      { type: "checklist", grid: true, fields: ["name", "need", "where", "tag"], groups },
      { type: "html", title: "Koken", html: "<div class=\"card\"> <p class=\"intro\">Koken kan meteen, je hoeft niets te leren. Bak vlees met of zonder een kruid:</p> <div class=\"table-wrap\"> <table> <thead><tr><th>Kruid</th><th>Effect</th></tr></thead> <tbody> <tr><td><strong>Wild Mint</strong></td><td>Vooral herstel van Health. Minty Big Game geeft een dag lang een gouden Health-core.</td></tr> <tr><td><strong>Oregano</strong></td><td>Vooral herstel van Stamina. Oregano Big Game geeft een dag lang een gouden Stamina-core.</td></tr> <tr><td><strong>Creeping Thyme</strong></td><td>Vooral herstel van Dead Eye. Thyme Big Game geeft een dag lang een gouden Dead Eye-core.</td></tr> </tbody> </table> </div> <p class=\"intro\" style=\"margin-top:14px\"><strong>Herbalist 10</strong> vraagt je om <strong>11 soorten vlees</strong> te kruiden en te bakken. De bronnen noemen deze vleessoorten. Vink aan wat je al gekruid hebt gebakken.</p> <ul class=\"checks cols\" id=\"meats\"></ul> </div>".replace(/<ul class="checks cols" id="meats"><\/ul>/, "") },
      { type: "checklist", columns: true, groups: [{ id: "meat", title: "Vleessoorten", items: meats }] }
    ],
    metrics: {
      crafted: () => RDR.ratio(crafted()),
      counted: () => RDR.capped(RDR.ratio(crafted()), 6),
      meats: () => RDR.capped(RDR.ratio(RDR.keysOf("recipes", "meat")), 11)
    },
    meters: [["crafted", "Recepten gemaakt"], ["counted", "Voor 100% (6 nodig)"], ["meats", "Herbalist 10 (11 vleessoorten)"]],
    v1: { store: "rdr2-recipes-v1", map: RDR.v1.byIndex("recipes") }
  });
})();
