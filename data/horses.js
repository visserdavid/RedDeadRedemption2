(() => {
  const breeds = [
    ["arabian",    "Arabian",              "Elite",       "Black Arabian in de stal van Saint Denis (hoofdstuk 4). De White Arabian is gratis te temmen bij Lake Isabella. De Rose Grey Bay staat in de stal van Blackwater (epiloog)."],
    ["thorough",   "Thoroughbred",         "Race",        "Brindle Thoroughbred in de stal, vanaf hoofdstuk 3."],
    ["nokota",     "Nokota",               "Race",        "Reverse Dapple Roan in de stal van Saint Denis (hoofdstuk 4). Wild ten zuiden van Armadillo (epiloog)."],
    ["standard",   "American Standardbred","Race",        "Palomino Dapple in de stal van Valentine. Wild bij Little Creek River (noorden van West Elizabeth)."],
    ["turkoman",   "Turkoman",             "War / Race",  "Gold Turkoman in de stal van Saint Denis (hoofdstuk 4). Dark Bay in Blackwater (epiloog)."],
    ["foxtrotter", "Missouri Fox Trotter", "Race / Work", "Amber Champagne in de stal van Scarlett Meadows (hoofdstuk 4)."],
    ["andalusian", "Andalusian",           "War",         "Dark Bay in de stal van Strawberry."],
    ["ardennes",   "Ardennes",             "War",         "Bay Roan in de stal van Scarlett Meadows. Strawberry Roan in Van Horn (hoofdstuk 6)."],
    ["hungarian",  "Hungarian Halfbred",   "War",         "Dapple Dark Grey in de stal van Valentine. Wild rond Blackwater."],
    ["warmblood",  "Dutch Warmblood",      "Work",        "Chocolate Roan in Valentine, Seal Brown in Strawberry (hoofdstuk 3), Sooty Buckskin in Scarlett Meadows. Buell (Cremello Gold) via <em>The Veteran</em>."],
    ["tennessee",  "Tennessee Walker",     "Riding",      "Je eerste paard in hoofdstuk 1. Red Roan in de stal van Valentine. Wild in de Heartlands."],
    ["morgan",     "Morgan",               "Riding",      "Palomino en Bay Roan in de stal van Valentine. Wild bij Little Creek River."],
    ["kentucky",   "Kentucky Saddler",     "Riding",      "Grey in de stal van Valentine. Wild in de Heartlands."],
    ["mustang",    "Mustang",              "",            "Wild in de Heartlands. De Tiger Striped Bay loopt wild rond Fort Mercer (New Austin, epiloog)."],
    ["appaloosa",  "Appaloosa",            "",            "Wild ten zuiden van Wapiti, bij Donner Falls (Ambarino). Leopard-vachten in de stal."],
    ["paint",      "American Paint",       "",            "Wild ten zuiden van Tumbleweed (New Austin, epiloog). Grey Overo in de stal van Tumbleweed."],
    ["shire",      "Shire",                "Draft",       "Trekpaard. De Raven Black Shire krijg je in de hoofdstuk 2-missie <em>Exit Pursued by a Bruised Ego</em>. Ook voor wagens."],
    ["belgian",    "Belgian Draft",        "Draft",       "Trekpaard voor wagens en op boerderijen. Bestuderen met de verrekijker is genoeg voor het compendium."],
    ["suffolk",    "Suffolk Punch",        "Draft",       "Trekpaard voor wagens en op boerderijen. Bestuderen met de verrekijker is genoeg voor het compendium."]
  ];
  const wild = [
    ["standard",  "American Standardbred", "Little Creek River, helemaal in het noorden van West Elizabeth"],
    ["morgan",    "Morgan",                "Little Creek River, samen met de American Standardbred"],
    ["mustang",   "Mustang",               "De Heartlands (New Hanover)"],
    ["tennessee", "Tennessee Walker",      "De Heartlands, in hetzelfde gebied als de Mustang"],
    ["kentucky",  "Kentucky Saddler",      "De Heartlands. Volgens sommige gidsen ook ten zuidwesten van Blackwater."],
    ["appaloosa", "Appaloosa",             "Ambarino, ten zuiden van Wapiti en bij Donner Falls (ook rond Cattail Pond)"],
    ["hungarian", "Hungarian Halfbred",    "Rond Blackwater. Zeldzaam."],
    ["nokota",    "Nokota",                "New Austin, ten zuiden van Armadillo (epiloog)"],
    ["paint",     "American Paint",        "New Austin, ten zuiden van Tumbleweed (epiloog)"]
  ];
  const special = [
    ["whitearab", "White Arabian",                     "Gratis en Elite. Op het smalle stuk land ten westen van Lake Isabella (Grizzlies West), vanaf hoofdstuk 2. Heel schrikachtig: benader hem langzaam. Is hij weg, dan komt hij na 2 tot 3 dagen in de game terug."],
    ["blackarab", "Black Arabian",                     "Stal van Saint Denis, vanaf hoofdstuk 4, ongeveer $1050."],
    ["rosearab",  "Rose Grey Bay Arabian",             "Stal van Blackwater in de epiloog, $1250. Het duurste paard in de game."],
    ["buell",     "Buell (Cremello Gold Dutch Warmblood)", "Beloning van de stranger-missies <em>The Veteran</em> met Hamish Sinclair (O'Creagh's Run)."],
    ["turkoman",  "Gold Turkoman",                     "Stal van Saint Denis, vanaf hoofdstuk 4, $950."],
    ["foxtrot",   "Amber Champagne Missouri Fox Trotter", "Stal van Scarlett Meadows, vanaf hoofdstuk 4, $950. Snel en veelzijdig."],
    ["brindle",   "Brindle Thoroughbred",              "Stal, vanaf hoofdstuk 3, ongeveer $450. Een snel paard voor weinig geld."],
    ["ardennes",  "Strawberry Roan Ardennes",          "Stal van Van Horn, vanaf hoofdstuk 6. Een oorlogspaard dat niet snel schrikt."],
    ["tiger",     "Tiger Striped Bay Mustang",         "Gratis. Loopt wild rond Fort Mercer (New Austin, epiloog)."]
  ];
  const bondLevels = ["Niveau 1", "Niveau 2", "Niveau 3", "Niveau 4 (nodig voor 100%)"];
  RDR.list({
    id: "horses", title: "Paarden", order: 50,
    heading: "Paarden Checklist", sub: "Red Dead Redemption 2 (story mode): alle 19 paardenrassen, de wilde rassen voor de Horseman-uitdaging, bijzondere paarden en de band met je paard.", blurb: "De 19 paardenrassen, de wilde rassen voor Horseman 10, bijzondere paarden en de band met je paard.",
    filter: "Verberg wat je al hebt",
    tips: [
    "Voor 100% moet je <strong>10 van de 19 rassen</strong> in het compendium hebben en met één paard <strong>bandniveau 4</strong> halen. Beide tellen automatisch mee op de pagina <a href=\"#/hundred\">100%</a>.",
    "Een ras komt in het compendium als je het <strong>bestudeert</strong> met de verrekijker of door erop te richten. Je hoeft het paard niet te kopen.",
    "<strong>Wild paard temmen:</strong> stijg af en benader het langzaam. Richt op het paard en kalmeer het, en stijg dan op. Houd daarna de linkerstick in balans tot het paard rustig is.",
    "Nieuwe stalpaarden komen vrij naarmate het verhaal vordert. De beste staan in Saint Denis (hoofdstuk 4) en in Blackwater (epiloog).",
    "In een stal kun je meerdere paarden stallen, wisselen en uitrusten met een ander zadel. Een gestolen paard kun je bij een stal laten registreren of verkopen."
  ],
    sources: [
    [
      "PowerPyx (wilde rassen)",
      "https://www.powerpyx.com/red-dead-redemption-2-wild-horse-breed-locations/"
    ],
    [
      "rdr2.org (wilde paarden)",
      "https://www.rdr2.org/guides/wild-horse-locations-guide/"
    ],
    [
      "Fextralife (paarden per stal)",
      "https://fextralife.com/red-dead-redemption-2-all-horse-type-guide/"
    ],
    [
      "HighGround Gaming (beste paarden)",
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
      { type: "checklist", title: "Band met je paard", groups: [{ id: "bond", title: "Bandniveau",
        items: bondLevels.map((name, i) => ({ id: String(i + 1), name })) }] },
      { type: "html", html: "<div class=\"card\"> <ul class=\"checks\" id=\"bond\"></ul> <ul class=\"tips small\" style=\"margin-top:10px\"> <li>De band groeit door te <strong>rijden</strong>, je paard te <strong>aaien</strong> (vooral na een rit of als het schrikt), te <strong>borstelen</strong> en te <strong>voeren</strong>.</li> <li>Laat je paard niet sterven: bij een nieuw paard begint de band weer op niveau 1. Heb je een Horse Reviver bij je, dan kun je een gewond paard redden.</li> <li>Elk niveau geeft je paard meer health en stamina en een nieuw kunstje.</li> </ul> </div>".replace(/<ul class="checks" id="bond"><\/ul>/, "") },
      { type: "checklist", title: "Wilde rassen temmen (Horseman 10)", columns: true,
        intro: "De laatste <a href=\"#/challenges\">Horseman-uitdaging</a>: tem één paard van elk wild ras. Kudden zijn er niet altijd. Zie je er geen, sla dan je kamp op en slaap even, of kom later terug.",
        groups: [{ id: "wild", title: "Wilde rassen", items: wild.map(([id, name, where]) => ({ id, name: `Wilde ${name}`, where })) }] },
      { type: "cards", id: "special", title: "Bijzondere paarden", intro: "De moeite waard om te bezitten: gratis wilde paarden, beloningen en de beste stalpaarden.",
        checkLabel: "<strong>In bezit</strong>", items: special.map(([id, name, desc]) => ({ id, name, desc })) },
      { type: "table", id: "breeds", title: "Alle rassen (compendium)", fields: ["id", "name", "type", "where"], rows: breeds,
        columns: [["Ras", r => r.name], ["Type", r => r.type || "–", "small muted"], ["Waar te vinden", r => r.where, "small"]] }
    ],
    metrics: {
      breeds: () => RDR.ratio(RDR.keysOf("horses", "breeds")),
      wild: () => RDR.ratio(RDR.keysOf("horses", "wild")),
      special: () => RDR.ratio(RDR.keysOf("horses", "special")),
      bond: () => RDR.ratio(RDR.keysOf("horses", "bond"))
    },
    meters: [["breeds", "Rassen ontdekt"], ["wild", "Wilde rassen getemd"], ["special", "Bijzondere paarden"], ["bond", "Band met je paard"]],
    v1: {
      store: "rdr2-horses-v1",
      map: k => {
        const [p, id] = k.split(":");
        const part = { breed: "breeds", wild: "wild", own: "special", bond: "bond" }[p];
        return part ? RDR.v1.byId("horses", part)(id) : null;
      }
    }
  });
})();
