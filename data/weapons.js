(() => {
  const all = () => RDR.groupsOf("weapons").flatMap(g => g.items);
  const tagged = t => RDR.ratio(all().filter(i => i.tag === t).map(i => i.key));
  RDR.list({
    id: "weapons", title: "Weapons", order: 60, group: "Gear",
    sub: "Red Dead Redemption 2 (story mode): all 65 weapons, from revolvers to hatchets, including the unique ones and where to find them.", blurb: "All 65 weapons in story mode, including the unique and missable ones. 48 weapon types are needed for 100%.",
    filter: "Hide weapons you have already used",
    tips: [
    "For 100% you need to <strong>use 48 weapon types</strong>. Check a weapon off as soon as you have used it. The count carries over automatically to the <a href=\"#/hundred\">100%</a> page.",
    "Weapons at the <strong>gunsmith</strong> unlock as the story progresses. You can also customize them there, and maintain them with <strong>gun oil</strong>.",
    "Weapons tagged <strong>Crafting</strong> are made at the campfire once you have the recipe. They also count for the <a href=\"#/challenges\">Survivalist and Weapons Expert</a> challenges.",
    "Weapons tagged <strong>Version</strong> are not in every version of the game, or were a bonus. You may not be able to get them."
  ],
    sources: [
    [
      "PowerPyx (all weapons)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-weapons-locations/"
    ],
    [
      "GosuNoob (unique weapons)",
      "https://www.gosunoob.com/red-dead-redemption-2/legendary-unique-weapons/"
    ],
    [
      "rdr2.org (rare weapons)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-rare-weapons-guide/"
    ],
    [
      "rdr2.org (gunslingers)",
      "https://www.rdr2.org/guides/the-noblest-of-men-and-a-woman-stranger-mission-guide/"
    ]
  ],
    sections: [
      { type: "html", title: "Watch out: missable", html: "<div class=\"card\"> <ul class=\"tips\"> <li><strong>The gunslingers' revolvers and pistol</strong> (Flaco, Granger, Calloway and Billy Midnight) drop to the ground after each duel. Pick them up right away, or they are gone for good. They belong to the stranger mission <em>The Noblest of Men, and a Woman</em>, which you start with Jimmy Brooks.</li> <li><strong>The Rare Rolling Block Rifle</strong> can only be taken during the chapter 3 mission <em>Magicians for Sport</em>, from the sniper in the barn.</li> </ul> </div>" },
      { type: "checklist", grid: true, groups: [
    { id: "revolvers", title: "Revolvers", items: [
      ["Cattleman Revolver", "You have it from the start"],
      ["Double-Action Revolver", "At any gunsmith, from chapter 2"],
      ["Schofield Revolver", "At any gunsmith from chapter 2, or from the gun cabinet in the Valentine doctor's office"],
      ["Navy Revolver", "Added later in an update. At the gunsmith.", "Version"],
      ["High Roller Double-Action Revolver", "At any Fence, after the mission <em>A Fine Night of Debauchery</em>"],
      ["Flaco's Revolver", "Pick it up after the duel with Flaco Hernandez (<em>The Noblest of Men, and a Woman</em>)", "Missable"],
      ["Granger's Revolver", "Pick it up after the duel with Emmet Granger (<em>The Noblest of Men, and a Woman</em>)", "Missable"],
      ["Calloway's Revolver", "Pick it up after the final duel, with Jim Calloway (<em>The Noblest of Men, and a Woman</em>)", "Missable"],
      ["Algernon's Revolver", "Reward for the last <a href=\"#/exotics\">Exotics</a> request for Algernon Wasp", "Unique"],
      ["Otis Miller's Revolver", "In a chest in a small cave on the northern edge of Cholla Springs (see <a href=\"#/treasure\">Mended Treasure Map</a>)", "Epilogue"],
      ["Micah's Revolver", "After the end of the epilogue: go back to Mount Hagen and take it from the frozen body", "Epilogue"],
      ["John's Cattleman Revolver", "You get it automatically in the epilogue", "Epilogue"]
    ] },
    { id: "pistols", title: "Pistols", items: [
      ["Volcanic Pistol", "At any gunsmith, from chapter 1"],
      ["Semi-Automatic Pistol", "At any gunsmith, from chapter 4"],
      ["Mauser Pistol", "At any gunsmith, from chapter 5"],
      ["M1899 Pistol", "Gunsmith in Saint Denis, after <em>The Battle for Shady Belle</em>. Came with the PC version.", "Version"],
      ["Midnight's Pistol", "Pick it up after the duel with Billy Midnight (<em>The Noblest of Men, and a Woman</em>)", "Missable"]
    ] },
    { id: "repeaters", title: "Repeaters", items: [
      ["Carbine Repeater", "You get it automatically in chapter 1"],
      ["Lancaster Repeater", "You get it automatically in chapter 2"],
      ["Litchfield Repeater", "You get it automatically in chapter 6"],
      ["Evans Repeater", "At any gunsmith, after <em>A Strange Kindness</em>. Came with the PC version.", "Version"]
    ] },
    { id: "rifles", title: "Rifles and sniper rifles", items: [
      ["Varmint Rifle", "At any gunsmith, from chapter 1. For small game."],
      ["Springfield Rifle", "At any gunsmith, from chapter 1"],
      ["Bolt-Action Rifle", "You get it automatically in chapter 3"],
      ["Rolling Block Rifle", "At any gunsmith, from chapter 2"],
      ["Rare Rolling Block Rifle", "Take it from the sniper in the barn, in the chapter 3 mission <em>Magicians for Sport</em>", "Missable"],
      ["Carcano Rifle", "At any gunsmith, after the mission <em>Goodbye, Dear Friend</em>"]
    ] },
    { id: "shotguns", title: "Shotguns", items: [
      ["Double-Barreled Shotgun", "At any gunsmith"],
      ["Sawed-Off Shotgun", "You get it automatically in chapter 1"],
      ["Pump-Action Shotgun", "At any gunsmith, from chapter 2"],
      ["Semi-Auto Shotgun", "At any gunsmith, from chapter 4"],
      ["Repeating Shotgun", "At any gunsmith, from chapter 6"],
      ["Rare Shotgun", "From chapter 2, a man in a cabin north of Annesburg has this weapon", "Unique"]
    ] },
    { id: "bow", title: "Bow", items: [
      ["Bow", "You get it automatically early in the game"]
    ] },
    { id: "throw", title: "Thrown weapons and explosives", items: [
      ["Throwing Knives", "You get them automatically in the first missions"],
      ["Improved Throwing Knives", "Craft them yourself", "Crafting"],
      ["Poison Throwing Knives", "Craft them yourself", "Crafting"],
      ["Tomahawk", "At any gunsmith, from chapter 2"],
      ["Improved Tomahawk", "Craft it yourself", "Crafting"],
      ["Homing Tomahawk", "Craft it yourself", "Crafting"],
      ["Ancient Tomahawk", "Stuck in a broken shooting target in eastern Calumet Valley", "Unique"],
      ["Dynamite", "You get it automatically in chapter 1"],
      ["Volatile Dynamite", "Craft it yourself", "Crafting"],
      ["Fire Bottle", "You get it automatically during the story"],
      ["Volatile Fire Bottle", "Craft it yourself", "Crafting"],
      ["Incendiary Bottle", "At any gunsmith, from chapter 3"]
    ] },
    { id: "melee", title: "Knives, hatchets and melee", items: [
      ["Unarmed", "From the start"],
      ["Hunting Knife", "From the start"],
      ["John's Knife", "You get it automatically in the epilogue", "Epilogue"],
      ["Machete", "At any gunsmith, from chapter 5"],
      ["Cleaver", "At any gunsmith, from chapter 5"],
      ["Hatchet", "At any gunsmith, from chapter 5"],
      ["Civil War Knife", "In a chest in the cellar of Fort Brennand, southwest of Van Horn", "Unique"],
      ["Jawbone Knife", "Reward for all 30 <a href=\"#/collectibles\">dinosaur bones</a>", "Unique"],
      ["Wide-Blade Knife", "On a body in the Beryl's Dream mine, west of Mount Shann", "Unique"],
      ["Antler Knife", "Next to a dead bear northwest of Hanging Dog Ranch", "Unique"],
      ["Ornate Dagger", "From the vampire in Saint Denis, after you have found 5 markings on walls", "Unique"],
      ["Broken Pirate Sword", "In a wreck on the islet south of the bridge at Saint Denis", "Unique"],
      ["Viking Hatchet", "In an old Viking grave on the south side of Roanoke Valley", "Unique"],
      ["Double Bit Hatchet", "On a tree stump northwest of Wallace Station", "Unique"],
      ["Rusted Double Bit Hatchet", "On a tree stump in Annesburg, just north of the coal mine", "Unique"],
      ["Hunter Hatchet", "On a tree stump at a cabin south of Window Rock", "Unique"],
      ["Rusted Hunter Hatchet", "On a tree stump at a cabin between Elysian Pool and O'Creagh's Run", "Unique"],
      ["Hewing Hatchet", "On a tree stump on the southern edge of Moonstone Pond", "Unique"],
      ["Stone Hatchet", "Only if you completed a certain treasure hunt in GTA Online (old bonus)", "Version"]
    ] }
  ] }
    ],
    metrics: {
      used: () => RDR.ratio(all().map(i => i.key)),
      unique: () => tagged("Unique"),
      missable: () => tagged("Missable")
    },
    meters: [["used", "Weapons used"], ["unique", "Unique weapons"], ["missable", "Missable weapons"]]
  });
})();
