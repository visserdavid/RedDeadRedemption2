(() => {
  const groups = [
    { id: "tonics", title: "Tonics", items: [
      ["Potent Bitters",        "1 Sage, 1 Burdock Root",                        "From the start"],
      ["Potent Health Cure",    "1 Ginseng, 1 Yarrow",                           "From the start"],
      ["Potent Miracle Tonic",  "4 Indian Tobacco, 4 Ginseng, 4 Sage",           "From the start"],
      ["Potent Snake Oil",      "1 Indian Tobacco",                              "From the start"],
      ["Special Bitters",       "2 Sage, 1 Burdock Root",                        "Pamphlet from the Fence, after chapter 2", "Pamphlet"],
      ["Special Health Cure",   "2 Ginseng, 2 Yarrow, 2 English Mace or 2 Milkweed", "After the mission <em>American Distillation</em>"],
      ["Special Miracle Tonic", "6 Currant, 6 Yarrow, 4 Burdock Root",           "After the mission <em>A Short Walk in a Pretty Town</em>"],
      ["Special Snake Oil",     "2 Indian Tobacco, 2 Currant or 2 Prairie Poppy","After the mission <em>American Distillation</em>"]
    ] },
    { id: "arrows", title: "Arrows", items: [
      ["Improved Arrow",    "1 Arrow, 1 Flight Feather",                   "Automatically at the start of chapter 2"],
      ["Fire Arrow",        "1 Arrow, 1 Animal Fat, 1 Flight Feather",     "Automatically at the start of chapter 2"],
      ["Small Game Arrow",  "1 Arrow, 1 Flight Feather, 1 Shotgun Shell",  "Automatically at the start of chapter 2"],
      ["Poison Arrow",      "1 Arrow, 1 Oleander Sage, 1 Flight Feather",  "Pamphlet from the Fence after chapter 2, or in a chest at the Mysterious Hill Home (northeast of Bacchus Station)", "Pamphlet"],
      ["Dynamite Arrow",    "1 Arrow, 1 Dynamite, 1 Flight Feather",       "Pamphlet from the Fence after <em>A Short Walk in a Pretty Town</em>, or in a chest by the wooden bridge in the south of the Wapiti reservation", "Pamphlet"]
    ] },
    { id: "ammo", title: "Ammo", items: [
      ["Revolver Cartridge – Split Point", "1 Revolver Cartridge",           "From chapter 2"],
      ["Pistol Cartridge – Split Point",   "1 Pistol Cartridge",             "From chapter 2"],
      ["Repeater Cartridge – Split Point", "1 Repeater Cartridge",           "From chapter 2"],
      ["Rifle Cartridge – Split Point",    "1 Rifle Cartridge",              "From chapter 2"],
      ["Revolver Cartridge – Explosive",   "1 Revolver Cartridge Express, 1 Animal Fat", "From chapter 2"],
      ["Pistol Cartridge – Explosive",     "1 Pistol Cartridge, 1 Animal Fat",   "From chapter 2"],
      ["Repeater Cartridge – Explosive",   "1 Repeater Cartridge, 1 Animal Fat", "From chapter 2"],
      ["Rifle Cartridge – Explosive",      "1 Rifle Cartridge, 1 Animal Fat",    "From chapter 2"],
      ["Shotgun Slug – Explosive",         "1 Shotgun Shell, 1 Animal Fat",      "Pamphlet from the Fence after <em>A Short Walk in a Pretty Town</em>, or at a burned-down house between Gaptooth Ridge and Cholla Springs (epilogue)", "Pamphlet"],
      ["Shotgun Shell – Incendiary Buckshot", "1 Shotgun Shell, 1 Moonshine",    "Pamphlet from the Fence after <em>Pouring Forth Oil</em>, or under the floor of a shack at Copperhead Landing", "Pamphlet"]
    ] },
    { id: "throw", title: "Thrown weapons and explosives", items: [
      ["Improved Throwing Knife", "1 Throwing Knife, 2 Eagle or Hawk Feathers", "Automatically in chapter 2"],
      ["Poison Throwing Knife",   "1 Throwing Knife, 1 Oleander Sage",          "Pamphlet from the Fence after <em>Pouring Forth Oil</em>, or under the floor of a shack northeast of Saint Denis", "Pamphlet"],
      ["Improved Tomahawk",       "1 Tomahawk, 1 Eagle or Hawk Feather",        "Automatically in chapter 2"],
      ["Homing Tomahawk",         "1 Tomahawk, 1 Owl Feather",                  "Pamphlet from the Fence after chapter 2, or in a chest in the collapsed shack south of Moonstone Pond", "Pamphlet"],
      ["Fire Bottle",             "1 Animal Fat, 1 Gin (or Bourbon, Rum, Brandy)", "Automatically in chapter 2"],
      ["Volatile Fire Bottle",    "1 Moonshine, 1 Animal Fat",                  "Pamphlet from the Fence after <em>Pouring Forth Oil</em>, or in an abandoned camp northwest of Horseshoe Overlook", "Pamphlet"],
      ["Volatile Dynamite",       "1 Dynamite, 1 Animal Fat, 1 High Velocity Cartridge", "Pamphlet from the Fence after <em>American Distillation</em>, or in a chest at Hani's Bethel", "Pamphlet"]
    ] },
    { id: "hunting", title: "Hunting", items: [
      ["Predator Bait",          "1 Stringy Meat, 1 Blackberry",                 "At the start of chapter 2"],
      ["Potent Predator Bait",   "1 Gritty Fish Meat, 1 Blackberry",             "At the start of chapter 2"],
      ["Potent Herbivore Bait",  "1 Vanilla Flower, 1 Violet Snowdrop, 1 Bay Bolete", "At the start of chapter 2"],
      ["Cover Scent Lotion",     "1 Scent Glands",                               "At the start of chapter 2"]
    ] },
    { id: "horse", title: "Horse care", items: [
      ["Potent Horse Medicine",   "1 Ginseng, 1 Common Bulrush",                 "At the start of chapter 2"],
      ["Potent Horse Stimulant",  "1 Sage, 1 Common Bulrush",                    "At the start of chapter 2"],
      ["Horse Ointment",          "1 Sage, 1 Common Bulrush, 1 Yarrow",          "At the start of chapter 2"],
      ["Horse Meal",              "3 Hay or 3 Beets",                            "Pamphlet from the Fence, after <em>Pouring Forth Oil</em>", "Pamphlet"],
      ["Special Horse Medicine",  "2 Ginseng, 2 Common Bulrush, 2 Wild Carrot",  "Pamphlet from the Fence", "Pamphlet"],
      ["Special Horse Stimulant", "2 Sage, 2 Common Bulrush, 2 Wild Carrot",     "Pamphlet from the Fence", "Pamphlet"],
      ["Special Horse Reviver",   "2 Ginseng, 2 Mushrooms, 2 Wild Carrot",       "Pamphlet from the Fence, after <em>American Distillation</em>", "Pamphlet"]
    ] }
  ];
  // Kinds of meat to season and cook (Herbalist 10).
  const meats = ["Big Game Meat", "Prime Beef Joint", "Tender Pork Loin", "Gristly Mutton", "Mature Venison", "Game Meat",
    "Stringy Meat", "Plump Bird Meat", "Gamey Bird Meat", "Exotic Bird Meat", "Herptile Meat",
    "Flaky Fish Meat", "Succulent Fish Meat", "Crustacean Meat"];
  const crafted = () => groups.flatMap(g => RDR.keysOf("recipes", g.id));
  RDR.list({
    id: "recipes", title: "Recipes", order: 90, group: "Gear",
    heading: "Recipes Checklist", sub: "Red Dead Redemption 2 (story mode): every recipe you craft at the campfire, with ingredients and how to unlock it, plus cooking.", blurb: "Every crafting recipe at the campfire, with ingredients and how to unlock it, plus the meats to cook.",
    filter: "Hide recipes you have already crafted",
    tips: [
    "You craft recipes at a <strong>campfire</strong>, in the gang's camp or at your own campsite. The ingredients are plants (see <a href=\"#/plants\">Plants</a>), animal products and ammo.",
    "Recipes tagged <strong>Pamphlet</strong> must be learned first. Buy the pamphlet from a Fence or find it at the listed spot, and <strong>then read it in your inventory</strong>. Only then can you craft the recipe.",
    "For 100% you need to craft <strong>6 recipes</strong>. That count goes automatically to the <a href=\"#/hundred\">100%</a> page.",
    "Many <a href=\"#/challenges\">challenges</a> also ask you to craft something. For <strong>Herbalist</strong>: items with Sage (3), with Indian Tobacco (5), Special Miracle Tonics (7), poison weapons with Oleander (8) and seasoning every kind of meat (10). For <strong>Survivalist</strong>: every kind of arrow (4) and the improved tomahawks and volatile explosives (8)."
  ],
    sources: [
    [
      "rdr2.org (crafting recipes)",
      "https://rdr2.org/guides/cooking-and-crafting-guide/3"
    ],
    [
      "rdr2.org (hunting and horse)",
      "https://www.rdr2.org/guides/cooking-and-crafting-guide/4/"
    ],
    [
      "rdr2.org (cooking)",
      "https://www.rdr2.org/guides/cooking-and-crafting-guide/2/"
    ],
    [
      "rdr2.org (overview)",
      "https://www.rdr2.org/guides/cooking-and-crafting-guide/"
    ]
  ],
    sections: [
      // Ingredients as "Needed:", how to unlock the recipe below that.
      { type: "checklist", grid: true, fields: ["name", "need", "where", "tag"], groups },
      { type: "html", title: "Cooking", html: "<div class=\"card\"> <p class=\"intro\">You can cook right away; there is nothing to learn. Cook meat with or without a herb:</p> <div class=\"table-wrap\"> <table> <thead><tr><th>Herb</th><th>Effect</th></tr></thead> <tbody> <tr><td><strong>Wild Mint</strong></td><td>Mainly restores Health. Minty Big Game fortifies your Health core (gold) for a day.</td></tr> <tr><td><strong>Oregano</strong></td><td>Mainly restores Stamina. Oregano Big Game fortifies your Stamina core (gold) for a day.</td></tr> <tr><td><strong>Creeping Thyme</strong></td><td>Mainly restores Dead Eye. Thyme Big Game fortifies your Dead Eye core (gold) for a day.</td></tr> </tbody> </table> </div> <p class=\"intro\" style=\"margin-top:14px\"><strong>Herbalist 10</strong> asks you to season and cook <strong>11 kinds of meat</strong>. The sources list these meats. Check off what you have already cooked with seasoning.</p> </div>" },
      { type: "checklist", columns: true, groups: [{ id: "meat", title: "Meats", items: meats }] }
    ],
    metrics: {
      crafted: () => RDR.ratio(crafted()),
      counted: () => RDR.capped(RDR.ratio(crafted()), 6),
      meats: () => RDR.capped(RDR.ratio(RDR.keysOf("recipes", "meat")), 11)
    },
    meters: [["crafted", "Recipes crafted"], ["counted", "For 100% (6 needed)"], ["meats", "Herbalist 10 (11 meats)"]]
  });
})();
