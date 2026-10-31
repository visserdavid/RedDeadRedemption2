(() => {
  const legends = [
    { id: "bear",     name: "Bharati Grizzly Bear",  short: "Grizzly bear",
      where: "Grizzlies East (Ambarino), north of O'Creagh's Run.",
      req: "Only after the chapter 2 mission <em>Exit Pursued by a Bruised Ego</em> (with Hosea).",
      fence: { type: "talisman", name: "Bear Claw Talisman", extra: "Silver Chain Bracelet + Quartz Chunk", effect: "Health core drains 10% slower" } },
    { id: "beaver",   name: "Legendary Beaver",      short: "Beaver",
      where: "Butcher Creek (Roanoke Ridge, New Hanover), southwest of Annesburg.",
      fence: { type: "trinket", name: "Beaver Tooth Trinket", effect: "Weapons degrade 10% slower" } },
    { id: "ram",      name: "Legendary Bighorn Ram", short: "Bighorn ram",
      where: "East of Cattail Pond, in the hills above Valentine.",
      fence: { type: "trinket", name: "Ram Horn Trinket", effect: "Double yield when picking some herbs" } },
    { id: "boar",     name: "Legendary Boar",        short: "Boar",
      where: "Southern Bluewater Marsh (Lemoyne), near Lagras.",
      fence: { type: "talisman", name: "Boar Tusk Talisman", extra: "Gold Earring + Cobalt Petrified Wood", effect: "Your horse's Health and Stamina cores drain 10% slower" } },
    { id: "buck",     name: "Legendary Buck",        short: "Buck",
      where: "Big Valley (West Elizabeth), southwest of the letter B on the map.",
      fence: { type: "trinket", name: "Buck Antler Trinket", effect: "Better quality when skinning" } },
    { id: "gator",    name: "Legendary Bullgator",   short: "Alligator",
      where: "Bayou Nwa (Lemoyne), near Lakay.",
      req: "Only after the chapter 4 mission <em>Country Pursuits</em>.",
      fence: { type: "talisman", name: "Alligator Tooth Talisman", extra: "Vintage Civil War Handcuffs + Gold Jointed Bracelet", effect: "Dead Eye core drains 10% slower" } },
    { id: "coyote",   name: "Legendary Coyote",      short: "Coyote",
      where: "Scarlett Meadows (Lemoyne), west of Rhodes.",
      fence: { type: "trinket", name: "Coyote Fang Trinket", effect: "+10% Dead Eye XP" } },
    { id: "elk",      name: "Legendary Elk",         short: "Elk",
      where: "East of Bacchus Station, in the woods of Cumberland Forest (New Hanover/Ambarino).",
      fence: { type: "trinket", name: "Elk Antler Trinket", effect: "+10% items when looting" } },
    { id: "fox",      name: "Legendary Fox",         short: "Fox",
      where: "Around Mattock Pond, north of Rhodes (Lemoyne).",
      fence: { type: "trinket", name: "Fox Claw Trinket", effect: "Eagle Eye lasts 5 seconds longer" } },
    { id: "moose",    name: "Legendary Moose",       short: "Moose",
      where: "Roanoke Ridge (New Hanover), east of Doverhill by a waterfall.",
      fence: { type: "trinket", name: "Moose Antler Trinket", effect: "+10% Health XP" } },
    { id: "panther",  name: "Giaguaro Panther",      short: "Panther",
      where: "Lemoyne, west of Shady Belle.",
      req: "Only after Master Hunter challenge 9. Killing Giaguaro is challenge 10 (see <a href=\"#/challenges\">Challenges</a>).",
      fence: { type: "trinket", name: "Panther's Eye Trinket", effect: "+10% Dead Eye core" } },
    { id: "whitebison", name: "Legendary White Bison", short: "White bison",
      where: "The shore of Lake Isabella (Ambarino), in the snow.",
      fence: { type: "talisman", name: "Bison Horn Talisman", extra: "Abalone Shell Fragment + Silver Earring", effect: "Stamina core drains 10% slower" } },
    { id: "wolf",     name: "Legendary Wolf",        short: "Wolf",
      where: "Cotorra Springs (Ambarino), between the geysers.",
      fence: { type: "trinket", name: "Wolf Heart Trinket", effect: "You can drink twice as much before getting drunk" } },
    { id: "cougar",   name: "Legendary Cougar",      short: "Cougar",
      where: "Gaptooth Ridge (New Austin), west of Tumbleweed.",
      req: "Epilogue (New Austin).",
      fence: { type: "trinket", name: "Cougar Fang Trinket", effect: "Dead Eye core drains slower" } },
    { id: "pronghorn", name: "Legendary Pronghorn",  short: "Pronghorn",
      where: "Rio Bravo (New Austin), near Rio del Lobo Rock.",
      req: "Epilogue (New Austin).",
      fence: { type: "trinket", name: "Pronghorn Horn Trinket", effect: "Carcasses on your horse no longer rot" } },
    { id: "tatanka",  name: "Legendary Tatanka Bison", short: "Tatanka bison",
      where: "Hennigan's Stead (New Austin), between MacFarlane's Ranch and Manteca Falls.",
      req: "Epilogue (New Austin).",
      fence: { type: "trinket", name: "Tatanka Bison Horn Trinket", effect: "-10% damage from melee attacks" } }
  ];
  const extras = [
    { id: "lion",   type: "trinket",  name: "Lion's Paw Trinket", effect: "+10% Stamina XP",
      how: "Reward of the stranger mission <em>He's British, of Course</em> (the escaped lion)." },
    { id: "owl",    type: "trinket",  name: "Owl Feather Trinket", effect: "+15% on all cores",
      how: "<strong>Missable!</strong> Play the chapter 6 mission <em>Archeology for Beginners</em> (Rains Fall) without killing anyone." },
    { id: "raven",  type: "talisman", name: "Raven Claw Talisman", effect: "Weapons degrade slower",
      how: "Crafted from the Old Brass Compass, which you get for all 10 <a href=\"#/collectibles\">rock carvings</a> for Francis Sinclair." },
    { id: "iguana", type: "trinket",  name: "Iguana Scale Trinket", effect: "-10% damage while on horseback",
      how: "Only in the Special/Ultimate Edition or as a pre-order bonus." },
    { id: "eagle",  type: "talisman", name: "Eagle Talon Talisman", effect: "Eagle Eye lasts 5 seconds longer",
      how: "Only in the Special/Ultimate Edition or as a pre-order bonus." },
    { id: "crow",   type: "trinket",  name: "Crow Beak Trinket", effect: "+10% ammo when looting",
      how: "The treasure of the <a href=\"#/treasure\">Elemental Trail</a> (epilogue), at Coot's Chapel. Came with the PC version." }
  ];
  // [id, name, legendary pelts, extra, price]
  const trapper = [
    ["bearcoat",   "Legendary Bear Coat",              ["bear"],            "Perfect bison pelt", 28],
    ["bearhat",    "Legendary Bear Head Hat",          ["bear"],            "", 40],
    ["bearroper",  "Legendary Bear Roper",             ["bear"],            "Perfect bull pelt", 34],
    ["beavglove",  "Legendary Beaver Cavalry Gloves",  ["beaver"],          "", 18],
    ["beavhat",    "Legendary Beaver Flop Hat",        ["beaver", "boar"],  "Cardinal feather", 22],
    ["bisonchaps", "Legendary Bison Batwing Chaps",    ["tatanka"],         "", 32],
    ["bisonvest",  "Legendary Bison Vest",             ["tatanka"],         "", 30],
    ["boarfowl",   "Legendary Boar & Bison Fowlers",   ["boar", "tatanka"], "", 37],
    ["buckfox",    "Legendary Buck & Fox Range Gloves",["buck", "fox"],     "", 28],
    ["buckvest",   "Legendary Buck Vest",              ["buck"],            "Perfect ram pelt", 26],
    ["cougarhat",  "Legendary Cougar Flop Hat",        ["cougar"],          "2 turkey feathers", 19],
    ["cougarglove","Legendary Cougar Riding Gloves",   ["cougar"],          "Perfect boar pelt", 20],
    ["cougarwolf", "Legendary Cougar/Wolf Vest",       ["cougar", "wolf"],  "", 42],
    ["coyotechaps","Legendary Coyote Half Chaps",      ["coyote"],          "2 perfect fox pelts", 20],
    ["coyotehat",  "Legendary Coyote Mountain Hat",    ["coyote"],          "2 eagle feathers", 23],
    ["elkchaps",   "Legendary Elk Half Chaps",         ["elk"],             "Perfect sheep pelt", 16],
    ["elkmocc",    "Legendary Elk Moccasins",          ["elk"],             "Perfect goat pelt", 30],
    ["elkglove",   "Legendary Elk Range Gloves",       ["elk"],             "", 13],
    ["gatorfowl",  "Legendary Alligator Fowlers",      ["gator"],           "", 35],
    ["gatorhat",   "Legendary Alligator Gambler's Hat",["gator"],           "2 perfect snake skins", 22],
    ["gatorvest",  "Legendary Alligator Vest",         ["gator"],           "", 35],
    ["foxmocc",    "Legendary Fox Moccasins",          ["fox"],             "Perfect elk pelt", 40],
    ["moosejacket","Legendary Moose Hunting Jacket",   ["moose"],           "Perfect wolf pelt", 24],
    ["moosemocc",  "Legendary Moose Moccasins",        ["moose"],           "Perfect cow pelt", 22],
    ["panthcloak", "Legendary Panther Cloak",          ["panther"],         "", 45],
    ["panthglove", "Legendary Panther Range Gloves",   ["panther"],         "Perfect Gila monster skin", 30],
    ["prongcoat",  "Legendary Pronghorn Coat",         ["pronghorn"],       "Perfect moose pelt", 35],
    ["prongglove", "Legendary Pronghorn Range Gloves", ["pronghorn"],       "Perfect muskrat skin", 17],
    ["ramchaps",   "Legendary Ram Batwing Chaps",      ["ram"],             "", 33],
    ["ramhat",     "Legendary Ram Hat",                ["ram"],             "", 17],
    ["ramglove",   "Legendary Ram Rifleman Gloves",    ["ram"],             "Perfect boar pelt", 12],
    ["wbisoncoat", "Legendary White Bison Coat",       ["whitebison"],      "", 29],
    ["wbisonhat",  "Legendary White Bison Hat",        ["whitebison"],      "", 45],
    ["wolfchaps",  "Legendary Wolf Batwing Chaps",     ["wolf"],            "Perfect goat pelt", 34]
  ];
  const byId = Object.fromEntries(legends.map(l => [l.id, l]));
  const animalKey = (id, check) => `legendary.animals.${id}.${check}`;

  RDR.list({
    id: "legendary", title: "Legendary animals", nav: "Legendary", order: 30, group: "Hunting & camp",
    sub: "Red Dead Redemption 2 (story mode): the 16 legendary animals, the clothing the Trapper makes from their pelts, and the Fence's trinkets and talismans.", blurb: "The 16 legendary animals, the Trapper clothing from their pelts, and the Fence's trinkets and talismans.",
    filter: "Hide what is already complete",
    tips: [
    "Every legendary animal is unique: there is only one of each and it does not come back. For 100% you only need to kill <strong>5</strong>, but for all trinkets, talismans and Trapper clothing you need every one.",
    "In the hunting area you first find clues. Inspect them with <strong>Eagle Eye</strong> (the animal appears after three clues). Then study it with binoculars and bring it down with a powerful rifle. A <strong>Rolling Block with Express ammo</strong> and a full Dead Eye bar work best.",
    "Skinning gives you the <strong>legendary pelt</strong> and a <strong>part</strong> (tooth, antler, claw…). The pelt is always perfect.",
    "Sell the pelt to the <strong>Trapper</strong> (Saint Denis, Riggs Station or Tumbleweed). That unlocks his legendary clothing. Do not sell it to a butcher or give it to Pearson, or it is gone for good.",
    "Take the part to a <strong>Fence</strong> (for example Emerald Ranch, Saint Denis, Lagras or Van Horn), who crafts a trinket or talisman from it. Trinkets and talismans work as soon as you own them; you do not have to wear them.",
    "Three animals live in <strong>New Austin</strong>. As Arthur you get shot by bounty hunters there, so hunt those three in the <strong>epilogue</strong>."
  ],
    sources: [
    [
      "rdr2.org (legendary animals)",
      "https://www.rdr2.org/guides/legendary-animals-locations-guide/"
    ],
    [
      "PowerPyx (legendary animals)",
      "https://www.powerpyx.com/red-dead-redemption-2-legendary-animals-locations/"
    ],
    [
      "rdr2.org (Trapper)",
      "https://www.rdr2.org/guides/trapper-crafting-materials-guide/"
    ],
    [
      "PowerPyx (trinkets)",
      "https://www.powerpyx.com/red-dead-redemption-2-how-to-get-trinkets/"
    ],
    [
      "Shacknews (talismans)",
      "https://www.shacknews.com/article/108291/all-talismans-and-trinkets-in-red-dead-redemption-2"
    ]
  ],
    // Raw data, also used by the trinkets list.
    legends, extras, animalKey,
    sections: [
      { type: "cards", id: "animals", title: "Per animal", layout: "animal",
        items: legends.map(l => ({
          id: l.id, name: l.name, sub: l.short,
          fields: [["Where", l.where], ...(l.req ? [["Requirement", l.req]] : []),
            ["Fence", `<strong>${l.fence.name}</strong>: ${l.fence.effect}.${l.fence.extra ? ` Also needed: ${l.fence.extra}.` : ""}`]],
          checks: [
            { id: "kill", label: "Killed and skinned" },
            { id: "pelt", label: "Pelt sold to the Trapper" },
            { id: "fence", label: `${l.fence.name}${RDR.tag(l.fence.type)}` }
          ]
        })) },
      { type: "cards", id: "extras", title: "Other trinkets and talismans",
        intro: "These do not come from a legendary animal, but they do count. All recipes and ingredients are on <a href=\"#/trinkets\">Trinkets</a>; the checkboxes there and here are the same.",
        checkLabel: "<strong>Owned</strong>",
        items: extras.map(x => ({ id: x.id, name: x.name, tags: [x.type], desc: x.how, note: x.effect })) },
      { type: "table", id: "trapper", title: "Trapper clothing",
        intro: "Each item only appears in the Trapper's shop once you have sold the legendary pelt(s). Some items also need a regular perfect pelt or feathers, which you bring yourself.",
        filter: ["trap", "Only show items you can buy now"],
        fields: ["id", "name", "legs", "extra", "price"], rows: trapper,
        columns: [["Item", r => r.name], ["Legendary pelt", r => r.legs.map(l => byId[l].short).join(" + ")],
          ["Also needed", r => r.extra || "–", "muted"], ["Price", r => `$${r.price}`, "num"]],
        hideRow: r => RDR.pref("legendary.trap") && (!!RDR.get(r.key) || !r.legs.every(l => RDR.get(animalKey(l, "pelt")))) }
    ],
    metrics: {
      kills: () => RDR.ratio(legends.map(l => animalKey(l.id, "kill"))),
      pelts: () => RDR.ratio(legends.map(l => animalKey(l.id, "pelt"))),
      fence: () => RDR.ratio([...legends.map(l => animalKey(l.id, "fence")), ...RDR.keysOf("legendary", "extras")]),
      trapper: () => RDR.ratio(RDR.keysOf("legendary", "trapper"))
    },
    meters: [["kills", "Animals killed"], ["pelts", "Pelts sold to the Trapper"], ["fence", "Trinkets + talismans"], ["trapper", "Trapper items bought"]]
  });
})();
