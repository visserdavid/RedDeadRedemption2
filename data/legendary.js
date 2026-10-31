(() => {
  const legends = [
    { id: "bear",     name: "Bharati Grizzly Bear",  nl: "Grizzlybeer",
      where: "Grizzlies East (Ambarino), ten noorden van O'Creagh's Run.",
      req: "Pas na de hoofdstuk 2-missie <em>Exit Pursued by a Bruised Ego</em> (met Hosea).",
      fence: { type: "talisman", name: "Bear Claw Talisman", extra: "Silver Chain Bracelet + Quartz Chunk", effect: "Health-core loopt 10% langzamer leeg" } },
    { id: "beaver",   name: "Legendary Beaver",      nl: "Bever",
      where: "Butcher Creek (Roanoke Ridge, New Hanover), ten zuidwesten van Annesburg.",
      fence: { type: "trinket", name: "Beaver Tooth Trinket", effect: "Wapens slijten 10% langzamer" } },
    { id: "ram",      name: "Legendary Bighorn Ram", nl: "Bighorn ram",
      where: "Ten oosten van Cattail Pond, in de heuvels boven Valentine.",
      fence: { type: "trinket", name: "Ram Horn Trinket", effect: "Dubbele opbrengst bij het plukken van sommige kruiden" } },
    { id: "boar",     name: "Legendary Boar",        nl: "Wild zwijn",
      where: "Het zuiden van Bluewater Marsh (Lemoyne), in de buurt van Lagras.",
      fence: { type: "talisman", name: "Boar Tusk Talisman", extra: "Gold Earring + Cobalt Petrified Wood", effect: "Health- en Stamina-core van je paard lopen 10% langzamer leeg" } },
    { id: "buck",     name: "Legendary Buck",        nl: "Bok",
      where: "Big Valley (West Elizabeth), ten zuidwesten van de letter B op de kaart.",
      fence: { type: "trinket", name: "Buck Antler Trinket", effect: "Betere kwaliteit bij het villen" } },
    { id: "gator",    name: "Legendary Bullgator",   nl: "Alligator",
      where: "Bayou Nwa (Lemoyne), bij Lakay.",
      req: "Pas na de hoofdstuk 4-missie <em>Country Pursuits</em>.",
      fence: { type: "talisman", name: "Alligator Tooth Talisman", extra: "Vintage Civil War Handcuffs + Gold Jointed Bracelet", effect: "Dead Eye-core loopt 10% langzamer leeg" } },
    { id: "coyote",   name: "Legendary Coyote",      nl: "Coyote",
      where: "Scarlett Meadows (Lemoyne), ten westen van Rhodes.",
      fence: { type: "trinket", name: "Coyote Fang Trinket", effect: "+10% Dead Eye-XP" } },
    { id: "elk",      name: "Legendary Elk",         nl: "Wapiti",
      where: "Ten oosten van Bacchus Station, in de bossen van Cumberland Forest (New Hanover/Ambarino).",
      fence: { type: "trinket", name: "Elk Antler Trinket", effect: "+10% buit bij het looten" } },
    { id: "fox",      name: "Legendary Fox",         nl: "Vos",
      where: "Rond Mattock Pond, ten noorden van Rhodes (Lemoyne).",
      fence: { type: "trinket", name: "Fox Claw Trinket", effect: "Eagle Eye duurt 5 seconden langer" } },
    { id: "moose",    name: "Legendary Moose",       nl: "Eland",
      where: "Roanoke Ridge (New Hanover), ten oosten van Doverhill bij een waterval.",
      fence: { type: "trinket", name: "Moose Antler Trinket", effect: "+10% Health-XP" } },
    { id: "panther",  name: "Giaguaro Panther",      nl: "Panter",
      where: "Lemoyne, ten westen van Shady Belle.",
      req: "Pas na Master Hunter-uitdaging 9. Het doden van Giaguaro is uitdaging 10 (zie <a href=\"#/challenges\">Uitdagingen</a>).",
      fence: { type: "trinket", name: "Panther's Eye Trinket", effect: "+10% Dead Eye-core" } },
    { id: "whitebison", name: "Legendary White Bison", nl: "Witte bizon",
      where: "De oever van Lake Isabella (Ambarino), in de sneeuw.",
      fence: { type: "talisman", name: "Bison Horn Talisman", extra: "Abalone Shell Fragment + Silver Earring", effect: "Stamina-core loopt 10% langzamer leeg" } },
    { id: "wolf",     name: "Legendary Wolf",        nl: "Wolf",
      where: "Cotorra Springs (Ambarino), tussen de geisers.",
      fence: { type: "trinket", name: "Wolf Heart Trinket", effect: "Je kunt twee keer zoveel drinken voordat je dronken bent" } },
    { id: "cougar",   name: "Legendary Cougar",      nl: "Poema",
      where: "Gaptooth Ridge (New Austin), ten westen van Tumbleweed.",
      req: "Epiloog (New Austin).",
      fence: { type: "trinket", name: "Cougar Fang Trinket", effect: "Dead Eye-core loopt minder snel leeg" } },
    { id: "pronghorn", name: "Legendary Pronghorn",  nl: "Pronghorn",
      where: "Rio Bravo (New Austin), bij Rio del Lobo Rock.",
      req: "Epiloog (New Austin).",
      fence: { type: "trinket", name: "Pronghorn Horn Trinket", effect: "Karkassen op je paard bederven niet meer" } },
    { id: "tatanka",  name: "Legendary Tatanka Bison", nl: "Tatanka-bizon",
      where: "Hennigan's Stead (New Austin), tussen MacFarlane's Ranch en Manteca Falls.",
      req: "Epiloog (New Austin).",
      fence: { type: "trinket", name: "Tatanka Bison Horn Trinket", effect: "-10% schade van melee-aanvallen" } }
  ];
  const extras = [
    { id: "lion",   type: "trinket",  name: "Lion's Paw Trinket", effect: "+10% Stamina-XP",
      how: "Beloning van de stranger-missie <em>He's British, of Course</em> (de ontsnapte leeuw)." },
    { id: "owl",    type: "trinket",  name: "Owl Feather Trinket", effect: "+15% op alle cores",
      how: "<strong>Missable!</strong> Speel de hoofdstuk 6-missie <em>Archeology for Beginners</em> (Rains Fall) zonder iemand te doden." },
    { id: "raven",  type: "talisman", name: "Raven Claw Talisman", effect: "Wapens slijten langzamer",
      how: "Maak je van de Old Brass Compass, die je krijgt na alle 10 <a href=\"#/collectibles\">rotstekeningen</a> voor Francis Sinclair." },
    { id: "iguana", type: "trinket",  name: "Iguana Scale Trinket", effect: "-10% schade te paard",
      how: "Alleen in de Special/Ultimate Edition of als pre-orderbonus." },
    { id: "eagle",  type: "talisman", name: "Eagle Talon Talisman", effect: "Eagle Eye duurt 5 seconden langer",
      how: "Alleen in de Special/Ultimate Edition of als pre-orderbonus." },
    { id: "crow",   type: "trinket",  name: "Crow Beak Trinket", effect: "+10% munitie bij het looten",
      how: "De schat van de <a href=\"#/treasure\">Elemental Trail</a> (epiloog), bij Coot's Chapel. Kwam met de pc-versie." }
  ];
  // [id, naam, legendarische huiden, extra, prijs]
  const trapper = [
    ["bearcoat",   "Legendary Bear Coat",              ["bear"],            "Perfecte bizonhuid", 28],
    ["bearhat",    "Legendary Bear Head Hat",          ["bear"],            "", 40],
    ["bearroper",  "Legendary Bear Roper",             ["bear"],            "Perfecte stierenhuid", 34],
    ["beavglove",  "Legendary Beaver Cavalry Gloves",  ["beaver"],          "", 18],
    ["beavhat",    "Legendary Beaver Flop Hat",        ["beaver", "boar"],  "Kardinaalveer", 22],
    ["bisonchaps", "Legendary Bison Batwing Chaps",    ["tatanka"],         "", 32],
    ["bisonvest",  "Legendary Bison Vest",             ["tatanka"],         "", 30],
    ["boarfowl",   "Legendary Boar & Bison Fowlers",   ["boar", "tatanka"], "", 37],
    ["buckfox",    "Legendary Buck & Fox Range Gloves",["buck", "fox"],     "", 28],
    ["buckvest",   "Legendary Buck Vest",              ["buck"],            "Perfecte ramshuid", 26],
    ["cougarhat",  "Legendary Cougar Flop Hat",        ["cougar"],          "2 kalkoenveren", 19],
    ["cougarglove","Legendary Cougar Riding Gloves",   ["cougar"],          "Perfecte zwijnenhuid", 20],
    ["cougarwolf", "Legendary Cougar/Wolf Vest",       ["cougar", "wolf"],  "", 42],
    ["coyotechaps","Legendary Coyote Half Chaps",      ["coyote"],          "2 perfecte vossenhuiden", 20],
    ["coyotehat",  "Legendary Coyote Mountain Hat",    ["coyote"],          "2 adelaarsveren", 23],
    ["elkchaps",   "Legendary Elk Half Chaps",         ["elk"],             "Perfecte schapenhuid", 16],
    ["elkmocc",    "Legendary Elk Moccasins",          ["elk"],             "Perfecte geitenhuid", 30],
    ["elkglove",   "Legendary Elk Range Gloves",       ["elk"],             "", 13],
    ["gatorfowl",  "Legendary Alligator Fowlers",      ["gator"],           "", 35],
    ["gatorhat",   "Legendary Alligator Gambler's Hat",["gator"],           "2 perfecte slangenhuiden", 22],
    ["gatorvest",  "Legendary Alligator Vest",         ["gator"],           "", 35],
    ["foxmocc",    "Legendary Fox Moccasins",          ["fox"],             "Perfecte wapitihuid", 40],
    ["moosejacket","Legendary Moose Hunting Jacket",   ["moose"],           "Perfecte wolvenhuid", 24],
    ["moosemocc",  "Legendary Moose Moccasins",        ["moose"],           "Perfecte koeienhuid", 22],
    ["panthcloak", "Legendary Panther Cloak",          ["panther"],         "", 45],
    ["panthglove", "Legendary Panther Range Gloves",   ["panther"],         "Perfecte gilamonsterhuid", 30],
    ["prongcoat",  "Legendary Pronghorn Coat",         ["pronghorn"],       "Perfecte elandhuid", 35],
    ["prongglove", "Legendary Pronghorn Range Gloves", ["pronghorn"],       "Perfecte muskusrattenhuid", 17],
    ["ramchaps",   "Legendary Ram Batwing Chaps",      ["ram"],             "", 33],
    ["ramhat",     "Legendary Ram Hat",                ["ram"],             "", 17],
    ["ramglove",   "Legendary Ram Rifleman Gloves",    ["ram"],             "Perfecte zwijnenhuid", 12],
    ["wbisoncoat", "Legendary White Bison Coat",       ["whitebison"],      "", 29],
    ["wbisonhat",  "Legendary White Bison Hat",        ["whitebison"],      "", 45],
    ["wolfchaps",  "Legendary Wolf Batwing Chaps",     ["wolf"],            "Perfecte geitenhuid", 34]
  ];
  const byId = Object.fromEntries(legends.map(l => [l.id, l]));
  const animalKey = (id, check) => `legendary.animals.${id}.${check}`;

  RDR.list({
    id: "legendary", title: "Legendarische dieren", order: 30,
    heading: "Legendarische Dieren Checklist", sub: "Red Dead Redemption 2 (story mode): de 16 legendarische dieren, de kleding die de Trapper van hun huiden maakt en de trinkets en talismannen van de Fence.", blurb: "De 16 legendarische dieren, de Trapper-kleding van hun huiden en de trinkets en talismannen van de Fence.",
    filter: "Verberg wat al compleet is",
    tips: [
    "Elk legendarisch dier is uniek: er bestaat er maar één van en het komt niet terug. Voor 100% hoef je er maar <strong>5</strong> te doden, maar voor alle trinkets, talismannen en Trapper-kleding heb je ze allemaal nodig.",
    "In het jachtgebied vind je eerst sporen. Onderzoek ze met <strong>Eagle Eye</strong> (na drie sporen verschijnt het dier). Bestudeer het dier dan met de verrekijker en schiet het neer met een krachtig geweer. Een <strong>Rolling Block met Express-munitie</strong> en een volle Dead Eye-balk werken het best.",
    "Na het villen krijg je de <strong>legendarische huid</strong> en het <strong>onderdeel</strong> (tand, gewei, klauw…). De huid is altijd perfect.",
    "Verkoop de huid aan de <strong>Trapper</strong> (Saint Denis, Riggs Station of Tumbleweed). Daarmee komen zijn legendarische kledingstukken vrij. Verkoop hem niet aan een slager of aan Pearson, want dan ben je hem kwijt.",
    "Het onderdeel breng je naar een <strong>Fence</strong> (bijvoorbeeld Emerald Ranch, Saint Denis, Lagras of Van Horn). Die maakt er een trinket of talisman van. Trinkets en talismannen werken zodra je ze hebt, je hoeft ze niet te dragen.",
    "Drie dieren leven in <strong>New Austin</strong>. Als Arthur word je daar door bounty hunters doodgeschoten, dus die drie jaag je in de <strong>epiloog</strong>."
  ],
    sources: [
    [
      "rdr2.org (legendarische dieren)",
      "https://www.rdr2.org/guides/legendary-animals-locations-guide/"
    ],
    [
      "PowerPyx (legendarische dieren)",
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
      "Shacknews (talismannen)",
      "https://www.shacknews.com/article/108291/all-talismans-and-trinkets-in-red-dead-redemption-2"
    ]
  ],
    // Ruwe gegevens, ook gebruikt door de trinkets-lijst.
    legends, extras, animalKey,
    sections: [
      { type: "cards", id: "animals", title: "Per dier", layout: "animal",
        items: legends.map(l => ({
          id: l.id, name: l.name, sub: l.nl,
          fields: [["Waar", l.where], ...(l.req ? [["Voorwaarde", l.req]] : []),
            ["Fence", `<strong>${l.fence.name}</strong>: ${l.fence.effect}.${l.fence.extra ? ` Ook nodig: ${l.fence.extra}.` : ""}`]],
          checks: [
            { id: "kill", label: "Gedood en gevild" },
            { id: "pelt", label: "Huid verkocht aan de Trapper" },
            { id: "fence", label: `${l.fence.name}${RDR.tag(l.fence.type)}` }
          ]
        })) },
      { type: "cards", id: "extras", title: "Overige trinkets en talismannen",
        intro: "Deze komen niet van een legendarisch dier, maar tellen wel mee. Alle recepten en ingrediënten staan op <a href=\"#/trinkets\">Trinkets</a>; vinkjes daar en hier zijn hetzelfde.",
        checkLabel: "<strong>In bezit</strong>",
        items: extras.map(x => ({ id: x.id, name: x.name, tags: [x.type], desc: x.how, note: x.effect })) },
      { type: "table", id: "trapper", title: "Trapper-kleding",
        intro: "Elk item komt pas bij de Trapper in de winkel als je de legendarische huid(en) hebt verkocht. Sommige items vragen ook nog een gewone perfecte huid of veren, die je zelf meebrengt.",
        filter: ["trap", "Toon alleen items die je nu kunt kopen"],
        fields: ["id", "name", "legs", "extra", "price"], rows: trapper,
        columns: [["Item", r => r.name], ["Legendarische huid", r => r.legs.map(l => byId[l].nl).join(" + ")],
          ["Extra nodig", r => r.extra || "–", "muted"], ["Prijs", r => `$${r.price}`, "num"]],
        hideRow: r => RDR.pref("legendary.trap") && (!!RDR.get(r.key) || !r.legs.every(l => RDR.get(animalKey(l, "pelt")))) }
    ],
    metrics: {
      kills: () => RDR.ratio(legends.map(l => animalKey(l.id, "kill"))),
      pelts: () => RDR.ratio(legends.map(l => animalKey(l.id, "pelt"))),
      fence: () => RDR.ratio([...legends.map(l => animalKey(l.id, "fence")), ...RDR.keysOf("legendary", "extras")]),
      trapper: () => RDR.ratio(RDR.keysOf("legendary", "trapper"))
    },
    meters: [["kills", "Dieren gedood"], ["pelts", "Huiden bij de Trapper"], ["fence", "Trinkets + talismannen"], ["trapper", "Trapper-items gekocht"]],
    v1: {
      store: "rdr2-legendary-v1",
      prefs: [["hide", "hide"], ["trap", "trap"]],
      map: k => {
        const [p, id] = k.split(":");
        if (["kill", "pelt", "fence"].includes(p)) return animalKey(id, p);
        if (p === "extra") return `legendary.extras.${id}`;
        if (p === "trap") return `legendary.trapper.${id}`;
        if (p === "ing") return `trinkets.ingredients.${id}`;
        return null;
      }
    }
  });
})();
