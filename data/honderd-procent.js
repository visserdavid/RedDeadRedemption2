(() => {
  // [id, omschrijving, aantal, link, hint]
  const SECTIONS = [
    { title: "Missies en events", items: [
      ["story",     "Alle hoofdmissies, inclusief de epiloog", 1, "", ""],
      ["strangers", "Stranger-verhaallijnen afgerond", 10, "#/strangers", ""],
      ["bounties",  "Bounties ingeleverd", 5, "#/bounties", ""],
      ["chance",    "Chance encounters (willekeurige ontmoetingen)", 25, "#/encounters", ""],
      ["bush",      "Bushwhacked (een hinderlaag van een bende overleefd)", 1, "", ""],
      ["hideouts",  "Bendeschuilplaatsen (gang hideouts) opgeruimd", 6, "#/hideouts", ""]
    ] },
    { title: "Verzamelobjecten", items: [
      ["poi",       "Points of interest", 1, "#/poi", ""],
      ["graves",    "Graven bezocht", 9, "#/collectibles", "Epiloog"],
      ["cards",     "Sigarettenkaarten", 144, "#/cigcards", ""],
      ["bones",     "Dinosaurusbotten", 30, "#/collectibles", ""],
      ["fish",      "Legendarische vissen", 13, "#/fish", ""],
      ["exotics",   "Exotics-opdrachten voor Algernon Wasp", 5, "#/exotics", ""],
      ["carvings",  "Rotstekeningen", 10, "#/collectibles", ""],
      ["hunting",   "Alle jachtopdrachten (hunting requests) van de treinstations", 1, "", ""],
      ["treasure",  "Een schattenjacht helemaal afgerond", 1, "#/treasure", ""],
      ["dream",     "Dreamcatchers", 20, "#/collectibles", ""]
    ] },
    { title: "Compendium", items: [
      ["c-animals", "Diersoorten ontdekt (van de 178)", 50, "", "Bestuderen met de verrekijker telt al"],
      ["c-equip",   "Uitrusting (van de 72)", 10, "", ""],
      ["c-fish",    "Vissoorten (van de 30)", 10, "", ""],
      ["c-gangs",   "Bendes ontdekt", 6, "#/hideouts", ""],
      ["c-horses",  "Paardenrassen (van de 19)", 10, "#/horses", ""],
      ["c-plants",  "Plantensoorten (van de 43)", 20, "#/plants", ""],
      ["c-weapons", "Wapentypes gebruikt", 48, "#/weapons", ""]
    ] },
    { title: "Speler", items: [
      ["cores",     "Health, Stamina en Dead Eye op het maximale niveau", 3, "", ""],
      ["bond",      "Band met een paard op niveau 4", 4, "#/horses", ""],
      ["challenges","Uitdagingscategorieën tot rang 10", 9, "#/challenges", ""]
    ] },
    { title: "Overig", items: [
      ["shacks",    "Hutten (shacks) bezocht", 5, "#/shacks", ""],
      ["legend",    "Legendarische dieren gedood", 5, "#/legendary", ""],
      ["games",     "Tafelspellen gespeeld", 4, "", "Poker, blackjack, domino en Five Finger Fillet"],
      ["ranters",   "Straatpredikers en campagnevoerders aangehoord", 5, "", ""],
      ["bath",      "Een bad genomen", 1, "", ""],
      ["show",      "Een show bekeken", 1, "", ""],
      ["theater",   "Een voorstelling in het Théâtre Râleur (Saint Denis)", 1, "", ""],
      ["recipes",   "Recepten gemaakt", 6, "#/recipes", ""],
      ["robberies", "Overvallen gepleegd", 4, "", ""]
    ] }
  ];
  // Onderdelen die automatisch uit een andere lijst komen: id → metric.
  const AUTO = {
    graves: "collectibles.graves", bones: "collectibles.bones", dream: "collectibles.dream", carvings: "collectibles.carvings",
    cards: "cigcards.cards", fish: "fish.fish", exotics: "exotics.turnedIn", treasure: "treasure.found",
    challenges: "challenges.categories", legend: "legendary.kills", "c-horses": "horses.breeds", bond: "horses.bond",
    "c-weapons": "weapons.used", strangers: "strangers.counted", "c-plants": "plants.species", bounties: "bounties.counted",
    hideouts: "hideouts.counted", "c-gangs": "hideouts.gangs", chance: "encounters.counted", recipes: "recipes.counted",
    poi: "poi.counted", shacks: "shacks.counted"
  };
  const groups = SECTIONS.map(s => ({
    id: RDR.slug(s.title), title: s.title,
    items: s.items.map(([id, name, max, link, hint]) => ({ id, name, max, link, hint, auto: AUTO[id] }))
  }));
  const value = it => it.auto ? Math.min(RDR.metric(it.auto).have, it.max) : Math.min(RDR.get(it.key) || 0, it.max);

  RDR.list({
    id: "hundred", title: "100%", order: 210,
    heading: "100% Checklist", sub: "Red Dead Redemption 2 (story mode): alles wat meetelt voor 100% voltooiing en de trophy/achievement <em>Best in the West</em>.", blurb: "Alles wat meetelt voor 100% voltooiing. Onderdelen met een eigen lijst tellen automatisch mee.",
    tips: [
    "Je actuele percentage en de officiële checklist staan in het pauzemenu onder <em>Progress</em>. Veel onderdelen worden pas zichtbaar als je het verhaal (inclusief de epiloog) hebt uitgespeeld.",
    "Je hebt niet alles nodig: het spel vraagt bijvoorbeeld maar 5 van de 16 legendarische dieren en 10 van de 30 vissoorten. Hieronder staan die eisen.",
    "Onderdelen met een eigen lijst (graven, botten, kaarten, vissen, uitdagingen…) tellen <strong>automatisch</strong> mee: vink ze af op die pagina, de link staat erbij. De rest houd je hier bij met de tellers (− / +)."
  ],
    sources: [
    [
      "PowerPyx (100%-checklist)",
      "https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/"
    ],
    [
      "rdr2.org (100%-gids)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-100-completion-guide/"
    ],
    [
      "GTABase",
      "https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist"
    ]
  ],
    sections: [{ type: "counters", groups }],
    metrics: {
      parts: () => {
        const items = RDR.groupsOf("hundred").flatMap(g => g.items);
        return { have: items.filter(it => value(it) >= it.max).length, total: items.length };
      }
    },
    meters: [["parts", "Onderdelen compleet"]],
    v1: {
      store: "rdr2-hundred-v1",
      map: k => {
        if (!k.startsWith("n:")) return null;
        const it = RDR.groupsOf("hundred").flatMap(g => g.items).find(i => i.id === k.slice(2));
        return it && !it.auto ? it.key : null;
      }
    }
  });
})();
