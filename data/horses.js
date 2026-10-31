(() => {
  const breeds = [
    ["arabian",    "Arabian",              "Elite",       "Black Arabian at the Saint Denis stable (chapter 4). The White Arabian can be tamed for free at Lake Isabella. The Rose Grey Bay is at the Blackwater stable (epilogue)."],
    ["thorough",   "Thoroughbred",         "Race",        "Brindle Thoroughbred at the stable, from chapter 3."],
    ["nokota",     "Nokota",               "Race",        "Reverse Dapple Roan at the Saint Denis stable (chapter 4). Wild south of Armadillo (epilogue)."],
    ["standard",   "American Standardbred","Race",        "Palomino Dapple at the Valentine stable. Wild at Little Creek River (northern West Elizabeth)."],
    ["turkoman",   "Turkoman",             "War / Race",  "Gold Turkoman at the Saint Denis stable (chapter 4). Dark Bay in Blackwater (epilogue)."],
    ["foxtrotter", "Missouri Fox Trotter", "Race / Work", "Amber Champagne at the Scarlett Meadows stable (chapter 4)."],
    ["andalusian", "Andalusian",           "War",         "Dark Bay at the Strawberry stable."],
    ["ardennes",   "Ardennes",             "War",         "Bay Roan at the Scarlett Meadows stable. Strawberry Roan in Van Horn (chapter 6)."],
    ["hungarian",  "Hungarian Halfbred",   "War",         "Dapple Dark Grey at the Valentine stable. Wild around Blackwater."],
    ["warmblood",  "Dutch Warmblood",      "Work",        "Chocolate Roan in Valentine, Seal Brown in Strawberry (chapter 3), Sooty Buckskin in Scarlett Meadows. Buell (Cremello Gold) through <em>The Veteran</em>."],
    ["tennessee",  "Tennessee Walker",     "Riding",      "Your first horse in chapter 1. Red Roan at the Valentine stable. Wild in the Heartlands."],
    ["morgan",     "Morgan",               "Riding",      "Palomino and Bay Roan at the Valentine stable. Wild at Little Creek River."],
    ["kentucky",   "Kentucky Saddler",     "Riding",      "Grey at the Valentine stable. Wild in the Heartlands."],
    ["mustang",    "Mustang",              "",            "Wild in the Heartlands. The Tiger Striped Bay roams wild around Fort Mercer (New Austin, epilogue)."],
    ["appaloosa",  "Appaloosa",            "",            "Wild south of Wapiti, near Donner Falls (Ambarino). Leopard coats at the stable."],
    ["paint",      "American Paint",       "",            "Wild south of Tumbleweed (New Austin, epilogue). Grey Overo at the Tumbleweed stable."],
    ["shire",      "Shire",                "Draft",       "Draft horse. You get the Raven Black Shire in the chapter 2 mission <em>Exit Pursued by a Bruised Ego</em>. Also pulls wagons."],
    ["belgian",    "Belgian Draft",        "Draft",       "Draft horse for wagons and on farms. Studying it with binoculars is enough for the compendium."],
    ["suffolk",    "Suffolk Punch",        "Draft",       "Draft horse for wagons and on farms. Studying it with binoculars is enough for the compendium."]
  ];
  const wild = [
    ["standard",  "American Standardbred", "Little Creek River, in the far north of West Elizabeth"],
    ["morgan",    "Morgan",                "Little Creek River, together with the American Standardbred"],
    ["mustang",   "Mustang",               "The Heartlands (New Hanover)"],
    ["tennessee", "Tennessee Walker",      "The Heartlands, in the same area as the Mustang"],
    ["kentucky",  "Kentucky Saddler",      "The Heartlands. Some guides also mention southwest of Blackwater."],
    ["appaloosa", "Appaloosa",             "Ambarino, south of Wapiti and near Donner Falls (also around Cattail Pond)"],
    ["hungarian", "Hungarian Halfbred",    "Around Blackwater. Rare."],
    ["nokota",    "Nokota",                "New Austin, south of Armadillo (epilogue)"],
    ["paint",     "American Paint",        "New Austin, south of Tumbleweed (epilogue)"]
  ];
  const special = [
    ["whitearab", "White Arabian",                     "Free and Elite. On the narrow strip of land west of Lake Isabella (Grizzlies West), from chapter 2. Very skittish: approach slowly. If it runs off, it comes back after 2 to 3 in-game days."],
    ["blackarab", "Black Arabian",                     "Saint Denis stable, from chapter 4, about $1050."],
    ["rosearab",  "Rose Grey Bay Arabian",             "Blackwater stable in the epilogue, $1250. The most expensive horse in the game."],
    ["buell",     "Buell (Cremello Gold Dutch Warmblood)", "Reward of the stranger missions <em>The Veteran</em> with Hamish Sinclair (O'Creagh's Run)."],
    ["turkoman",  "Gold Turkoman",                     "Saint Denis stable, from chapter 4, $950."],
    ["foxtrot",   "Amber Champagne Missouri Fox Trotter", "Scarlett Meadows stable, from chapter 4, $950. Fast and versatile."],
    ["brindle",   "Brindle Thoroughbred",              "Stable, from chapter 3, about $450. A fast horse for little money."],
    ["ardennes",  "Strawberry Roan Ardennes",          "Van Horn stable, from chapter 6. A war horse that does not spook easily."],
    ["tiger",     "Tiger Striped Bay Mustang",         "Free. Roams wild around Fort Mercer (New Austin, epilogue)."]
  ];
  const bondLevels = ["Level 1", "Level 2", "Level 3", "Level 4 (needed for 100%)"];
  RDR.list({
    id: "horses", title: "Horses", order: 50, group: "Gear",
    heading: "Horses Checklist", sub: "Red Dead Redemption 2 (story mode): all 19 horse breeds, the wild breeds for the Horseman challenge, special horses and your horse bond.", blurb: "The 19 horse breeds, the wild breeds for Horseman 10, special horses and your horse bond.",
    filter: "Hide what you already have",
    tips: [
    "For 100% you need <strong>10 of the 19 breeds</strong> in the compendium and <strong>bonding level 4</strong> with one horse. Both count automatically on the <a href=\"#/hundred\">100%</a> page.",
    "A breed is added to the compendium when you <strong>study</strong> it with binoculars or by aiming at it. You do not have to buy the horse.",
    "<strong>Taming a wild horse:</strong> dismount and approach slowly. Aim at the horse and calm it, then mount. Keep the left stick balanced until the horse settles down.",
    "New stable horses unlock as the story progresses. The best ones are in Saint Denis (chapter 4) and Blackwater (epilogue).",
    "At a stable you can keep several horses, swap them and fit another saddle. A stolen horse can be registered or sold at a stable."
  ],
    sources: [
    [
      "PowerPyx (wild breeds)",
      "https://www.powerpyx.com/red-dead-redemption-2-wild-horse-breed-locations/"
    ],
    [
      "rdr2.org (wild horses)",
      "https://www.rdr2.org/guides/wild-horse-locations-guide/"
    ],
    [
      "Fextralife (horses per stable)",
      "https://fextralife.com/red-dead-redemption-2-all-horse-type-guide/"
    ],
    [
      "HighGround Gaming (best horses)",
      "https://www.highgroundgaming.com/best-horses-in-rdr2-story/"
    ],
    [
      "Sportskeeda (White Arabian)",
      "https://www.sportskeeda.com/esports/red-dead-redemption-2-find-tame-white-arabian-horse"
    ],
    [
      "GTABase (Buell)",
      "https://www.gtabase.com/red-dead-redemption-2/horses/cremello-dutch-warmblood"
    ]
  ],
    sections: [
      { type: "checklist", title: "Horse bond", groups: [{ id: "bond", title: "Bonding level",
        items: bondLevels.map((name, i) => ({ id: String(i + 1), name })) }] },
      { type: "html", html: "<div class=\"card\"> <ul class=\"tips small\" style=\"margin-top:10px\"> <li>The bond grows by <strong>riding</strong>, <strong>patting</strong> your horse (especially after a ride or when it gets spooked), <strong>brushing</strong> and <strong>feeding</strong> it.</li> <li>Do not let your horse die: with a new horse the bond starts at level 1 again. If you carry a Horse Reviver, you can save a wounded horse.</li> <li>Each level gives your horse more health and stamina and a new trick.</li> </ul> </div>" },
      { type: "checklist", title: "Taming wild breeds (Horseman 10)", columns: true,
        intro: "The last <a href=\"#/challenges\">Horseman challenge</a>: tame one horse of each wild breed. Herds are not always there. If you see none, set up camp and sleep for a while, or come back later.",
        groups: [{ id: "wild", title: "Wild breeds", items: wild.map(([id, name, where]) => ({ id, name: `Wild ${name}`, where })) }] },
      { type: "cards", id: "special", title: "Special horses", intro: "Worth owning: free wild horses, rewards and the best stable horses.",
        checkLabel: "<strong>Owned</strong>", items: special.map(([id, name, desc]) => ({ id, name, desc })) },
      { type: "table", id: "breeds", title: "All breeds (compendium)", fields: ["id", "name", "type", "where"], rows: breeds,
        columns: [["Breed", r => r.name], ["Type", r => r.type || "–", "small muted"], ["Where to find", r => r.where, "small"]] }
    ],
    metrics: {
      breeds: () => RDR.ratio(RDR.keysOf("horses", "breeds")),
      wild: () => RDR.ratio(RDR.keysOf("horses", "wild")),
      special: () => RDR.ratio(RDR.keysOf("horses", "special")),
      bond: () => RDR.ratio(RDR.keysOf("horses", "bond"))
    },
    meters: [["breeds", "Breeds discovered"], ["wild", "Wild breeds tamed"], ["special", "Special horses"], ["bond", "Horse bond"]]
  });
})();
