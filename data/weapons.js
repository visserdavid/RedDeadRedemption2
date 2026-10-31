(() => {
  const all = () => RDR.groupsOf("weapons").flatMap(g => g.items);
  const tagged = t => RDR.ratio(all().filter(i => i.tag === t).map(i => i.key));
  RDR.list({
    id: "weapons", title: "Wapens", order: 60,
    heading: "Wapens Checklist", sub: "Red Dead Redemption 2 (story mode): alle 65 wapens, van revolvers tot bijlen, met de unieke exemplaren en waar je ze vindt.", blurb: "Alle 65 wapens in story mode, met de unieke en missable exemplaren. 48 wapentypes zijn nodig voor 100%.",
    filter: "Verberg wapens die je al hebt gebruikt",
    tips: [
    "Voor 100% moet je <strong>48 wapentypes gebruiken</strong>. Vink een wapen af zodra je het hebt gebruikt. De telling gaat automatisch mee naar de pagina <a href=\"#/hundred\">100%</a>.",
    "Wapens bij de <strong>gunsmith</strong> komen vrij naarmate het verhaal vordert. Daar kun je ze ook aanpassen, en onderhoud doe je met <strong>gun oil</strong>.",
    "Wapens met de tag <strong>Crafting</strong> maak je zelf bij het kampvuur, zodra je het recept hebt. Ze tellen ook voor de uitdagingen bij <a href=\"#/challenges\">Survivalist en Weapons Expert</a>.",
    "Wapens met de tag <strong>Versie</strong> zitten niet in elke versie van de game, of waren een bonus. Het kan zijn dat jij ze niet kunt krijgen."
  ],
    sources: [
    [
      "PowerPyx (alle wapens)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-weapons-locations/"
    ],
    [
      "GosuNoob (unieke wapens)",
      "https://www.gosunoob.com/red-dead-redemption-2/legendary-unique-weapons/"
    ],
    [
      "rdr2.org (zeldzame wapens)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-rare-weapons-guide/"
    ],
    [
      "rdr2.org (gunslingers)",
      "https://www.rdr2.org/guides/the-noblest-of-men-and-a-woman-stranger-mission-guide/"
    ]
  ],
    sections: [
      { type: "html", title: "Let op: missable", html: "<div class=\"card\"> <ul class=\"tips\"> <li><strong>De revolvers en het pistool van de gunslingers</strong> (Flaco, Granger, Calloway en Billy Midnight) liggen na elk duel op de grond. Raap ze direct op, anders zijn ze voorgoed weg. Ze horen bij de stranger-missie <em>The Noblest of Men, and a Woman</em>, die je begint bij Jimmy Brooks.</li> <li><strong>De Rare Rolling Block Rifle</strong> pak je alleen tijdens de hoofdstuk 3-missie <em>Magicians for Sport</em>, van de sluipschutter in de schuur.</li> </ul> </div> <div id=\"hideFilter\" style=\"margin-top:24px\"></div> <div class=\"grid\" id=\"groups\"></div>" },
      { type: "checklist", grid: true, groups: [
    { id: "revolvers", title: "Revolvers", items: [
      ["Cattleman Revolver", "Heb je vanaf het begin"],
      ["Double-Action Revolver", "Bij elke gunsmith, vanaf hoofdstuk 2"],
      ["Schofield Revolver", "Bij elke gunsmith vanaf hoofdstuk 2, of uit de wapenkast in de drogisterij van Valentine"],
      ["Navy Revolver", "Kwam later met een update. Bij de gunsmith.", "Versie"],
      ["High Roller Double-Action Revolver", "Bij elke Fence, na de missie <em>A Fine Night of Debauchery</em>"],
      ["Flaco's Revolver", "Pak hem op na het duel met Flaco Hernandez (<em>The Noblest of Men, and a Woman</em>)", "Missable"],
      ["Granger's Revolver", "Pak hem op na het duel met Emmet Granger (<em>The Noblest of Men, and a Woman</em>)", "Missable"],
      ["Calloway's Revolver", "Pak hem op na het laatste duel, met Jim Calloway (<em>The Noblest of Men, and a Woman</em>)", "Missable"],
      ["Algernon's Revolver", "Beloning van de laatste <a href=\"#/exotics\">Exotics</a>-opdracht voor Algernon Wasp", "Uniek"],
      ["Otis Miller's Revolver", "In een kist in een grotje aan de noordrand van Cholla Springs (zie <a href=\"#/treasure\">Mended Treasure Map</a>)", "Epiloog"],
      ["Micah's Revolver", "Na het einde van de epiloog: ga terug naar Mount Hagen en pak hem van het bevroren lichaam", "Epiloog"],
      ["John's Cattleman Revolver", "Krijg je automatisch in de epiloog", "Epiloog"]
    ] },
    { id: "pistols", title: "Pistolen", items: [
      ["Volcanic Pistol", "Bij elke gunsmith, vanaf hoofdstuk 1"],
      ["Semi-Automatic Pistol", "Bij elke gunsmith, vanaf hoofdstuk 4"],
      ["Mauser Pistol", "Bij elke gunsmith, vanaf hoofdstuk 5"],
      ["M1899 Pistol", "Gunsmith in Saint Denis, na <em>The Battle for Shady Belle</em>. Kwam met de pc-versie.", "Versie"],
      ["Midnight's Pistol", "Pak hem op na het duel met Billy Midnight (<em>The Noblest of Men, and a Woman</em>)", "Missable"]
    ] },
    { id: "repeaters", title: "Repeaters", items: [
      ["Carbine Repeater", "Krijg je automatisch in hoofdstuk 1"],
      ["Lancaster Repeater", "Krijg je automatisch in hoofdstuk 2"],
      ["Litchfield Repeater", "Krijg je automatisch in hoofdstuk 6"],
      ["Evans Repeater", "Bij elke gunsmith, na <em>A Strange Kindness</em>. Kwam met de pc-versie.", "Versie"]
    ] },
    { id: "rifles", title: "Geweren en sniper rifles", items: [
      ["Varmint Rifle", "Bij elke gunsmith, vanaf hoofdstuk 1. Voor klein wild."],
      ["Springfield Rifle", "Bij elke gunsmith, vanaf hoofdstuk 1"],
      ["Bolt-Action Rifle", "Krijg je automatisch in hoofdstuk 3"],
      ["Rolling Block Rifle", "Bij elke gunsmith, vanaf hoofdstuk 2"],
      ["Rare Rolling Block Rifle", "Pak hem op van de sluipschutter in de schuur, in de hoofdstuk 3-missie <em>Magicians for Sport</em>", "Missable"],
      ["Carcano Rifle", "Bij elke gunsmith, na de missie <em>Goodbye, Dear Friend</em>"]
    ] },
    { id: "shotguns", title: "Shotguns", items: [
      ["Double-Barreled Shotgun", "Bij elke gunsmith"],
      ["Sawed-Off Shotgun", "Krijg je automatisch in hoofdstuk 1"],
      ["Pump-Action Shotgun", "Bij elke gunsmith, vanaf hoofdstuk 2"],
      ["Semi-Auto Shotgun", "Bij elke gunsmith, vanaf hoofdstuk 4"],
      ["Repeating Shotgun", "Bij elke gunsmith, vanaf hoofdstuk 6"],
      ["Rare Shotgun", "Vanaf hoofdstuk 2 heeft een man in een hut ten noorden van Annesburg dit wapen", "Uniek"]
    ] },
    { id: "bow", title: "Boog", items: [
      ["Bow", "Krijg je automatisch vroeg in het spel"]
    ] },
    { id: "throw", title: "Werpwapens en explosieven", items: [
      ["Throwing Knives", "Krijg je automatisch in de eerste missies"],
      ["Improved Throwing Knives", "Zelf maken", "Crafting"],
      ["Poison Throwing Knives", "Zelf maken", "Crafting"],
      ["Tomahawk", "Bij elke gunsmith, vanaf hoofdstuk 2"],
      ["Improved Tomahawk", "Zelf maken", "Crafting"],
      ["Homing Tomahawk", "Zelf maken", "Crafting"],
      ["Ancient Tomahawk", "Steekt in een kapot schietdoel in het oosten van Calumet Valley", "Uniek"],
      ["Dynamite", "Krijg je automatisch in hoofdstuk 1"],
      ["Volatile Dynamite", "Zelf maken", "Crafting"],
      ["Fire Bottle", "Krijg je automatisch tijdens het verhaal"],
      ["Volatile Fire Bottle", "Zelf maken", "Crafting"],
      ["Incendiary Bottle", "Bij elke gunsmith, vanaf hoofdstuk 3"]
    ] },
    { id: "melee", title: "Messen, bijlen en melee", items: [
      ["Unarmed (vuisten)", "Vanaf het begin"],
      ["Hunting Knife", "Vanaf het begin"],
      ["John's Knife", "Krijg je automatisch in de epiloog", "Epiloog"],
      ["Machete", "Bij elke gunsmith, vanaf hoofdstuk 5"],
      ["Cleaver", "Bij elke gunsmith, vanaf hoofdstuk 5"],
      ["Hatchet", "Bij elke gunsmith, vanaf hoofdstuk 5"],
      ["Civil War Knife", "In een kist in de kelder van Fort Brennand, ten zuidwesten van Van Horn", "Uniek"],
      ["Jawbone Knife", "Beloning voor alle 30 <a href=\"#/collectibles\">dinosaurusbotten</a>", "Uniek"],
      ["Wide-Blade Knife", "Bij een lijk in de mijn van Beryl's Dream, ten westen van Mount Shann", "Uniek"],
      ["Antler Knife", "Bij een dode beer ten noordwesten van Hanging Dog Ranch", "Uniek"],
      ["Ornate Dagger", "Van de vampier in Saint Denis, nadat je 5 markeringen op muren hebt gevonden", "Uniek"],
      ["Broken Pirate Sword", "In een wrak op het eilandje ten zuiden van de brug bij Saint Denis", "Uniek"],
      ["Viking Hatchet", "In een oud Vikinggraf aan de zuidkant van Roanoke Valley", "Uniek"],
      ["Double Bit Hatchet", "Op een boomstronk ten noordwesten van Wallace Station", "Uniek"],
      ["Rusted Double Bit Hatchet", "Op een boomstronk in Annesburg, iets ten noorden van de kolenmijn", "Uniek"],
      ["Hunter Hatchet", "Op een boomstronk bij een hut ten zuiden van Window Rock", "Uniek"],
      ["Rusted Hunter Hatchet", "Op een boomstronk bij een hut tussen Elysian Pool en O'Creagh's Run", "Uniek"],
      ["Hewing Hatchet", "Op een boomstronk aan de zuidrand van Moonstone Pond", "Uniek"],
      ["Stone Hatchet", "Alleen als je een bepaalde schattenjacht in GTA Online hebt gedaan (oude bonus)", "Versie"]
    ] }
  ] }
    ],
    metrics: {
      used: () => RDR.ratio(all().map(i => i.key)),
      unique: () => tagged("Uniek"),
      missable: () => tagged("Missable")
    },
    meters: [["used", "Wapens gebruikt"], ["unique", "Unieke wapens"], ["missable", "Missable wapens"]],
    v1: { store: "rdr2-weapons-v1", map: RDR.v1.byIndex("weapons") }
  });
})();
