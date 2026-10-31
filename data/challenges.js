(() => {
  const groups = () => RDR.groupsOf("challenges");
  RDR.list({
    id: "challenges", title: "Uitdagingen", order: 160,
    heading: "Uitdagingen Checklist", sub: "Red Dead Redemption 2 (story mode): alle 90 uitdagingen (challenges) in 9 categorieën. Alle 9 categorieën tot rang 10 zijn nodig voor 100%.", blurb: "Alle 90 uitdagingen in 9 categorieën, op volgorde.",
    filter: "Verberg voltooide uitdagingen",
    tips: [
    "Per categorie doe je de uitdagingen <strong>op volgorde</strong>: wat je voor een latere rang doet, telt pas als de vorige rang klaar is. De eerstvolgende uitdaging staat hieronder <strong>vetgedrukt</strong>.",
    "De uitdagingen komen vrij vanaf hoofdstuk 2. Je voortgang zie je in het pauzemenu onder <em>Progress → Challenges</em>.",
    "Bij veel rangen krijg je een beloning, zoals geld, XP of een uitrustingsstuk (bij Explorer staat die beloning erbij)."
  ],
    sources: [
    [
      "rdr2.org (alle challenges)",
      "https://www.rdr2.org/wiki/challenges/"
    ],
    [
      "rdr2.org (Explorer-schatkaarten)",
      "https://www.rdr2.org/guides/explorer-challenges-guide/"
    ],
    [
      "rdr2.org (Master Hunter)",
      "https://www.rdr2.org/guides/master-hunter-challenges-guide/"
    ],
    [
      "rdr2.org (Herbalist)",
      "https://www.rdr2.org/guides/herbalist-challenge-guide/"
    ],
    [
      "TrueAchievements",
      "https://www.trueachievements.com/game/Red-Dead-Redemption-2/walkthrough/5"
    ]
  ],
    sections: [{
      type: "checklist", grid: true, numbered: true, highlightNext: true,
      groups: [
    { id: "bandit", title: "Bandit", items: [
      ["Beroof 5 burgers (hold up)", ""],
      ["Beroof 2 koetsen, of lever 2 gestolen koetsen in bij een Fence", ""],
      ["Beroof de kassa van 4 winkels op één dag", ""],
      ["Beroof 3 koetsen op één dag, of lever ze in bij een Fence", ""],
      ["Verzamel een bounty van $250 in één staat", ""],
      ["Steel 5 paarden en verkoop ze aan de paardenheler bij Clemens Cove", ""],
      ["Roof voor $50 aan geld en waardevolle spullen van burgers en reizigers", ""],
      ["Steel 7 wagens en verkoop ze aan de Fence bij Emerald Ranch", ""],
      ["Bind 3 keer iemand vast en leg hem op het spoor", "De trein moet de persoon raken"],
      ["Pleeg 5 treinovervallen zonder te sterven of gepakt te worden", ""]
    ] },
    { id: "explorer", title: "Explorer", intro: "Haal je met de schatten van de Jack Hall Gang, Poisonous Trail en High Stakes. De route per rang staat op <a href=\"#/explorer\">Explorer-schatten</a>.", items: [
      ["Vind de eerste schatkaart", "Explorer Holster"],
      ["Vind de eerste schat", "$5 + stamina-XP"],
      ["Vind de tweede schat", "Explorer Bandolier"],
      ["Vind de derde schat", "$10 + stamina-XP"],
      ["Vind de vierde schat", "$10 + stamina-XP"],
      ["Vind de vijfde schat", "$15 + stamina-XP"],
      ["Vind de zesde schat", "Explorer Gun Belt"],
      ["Vind de zevende schat", "$15 + stamina-XP"],
      ["Vind de achtste schat", "$20 + stamina-XP"],
      ["Vind de negende schat", "Explorer Off-Hand Holster"]
    ] },
    { id: "gambler", title: "Gambler", items: [
      ["Win 5 handen poker", ""],
      ["Blackjack: verdubbel (double down) en win 5 keer", ""],
      ["Win 3 potjes Five Finger Fillet", ""],
      ["Versla de pokerspelers in Flatneck Station, Saint Denis en Valentine", ""],
      ["Win 3 potjes domino zonder stenen te pakken, tegen hooguit 2 tegenstanders", ""],
      ["Versla de blackjackdealer in Rhodes en Van Horn", ""],
      ["Versla de Five Finger Fillet-speler in Strawberry, Valentine en Van Horn", ""],
      ["Win 3 handen blackjack waarin je 3 keer of vaker hit", ""],
      ["Win 3 potjes domino op rij", ""],
      ["Win 3 handen poker op rij", ""]
    ] },
    { id: "herbalist", title: "Herbalist", items: [
      ["Pluk 6 Yarrow", ""],
      ["Pluk en eet 4 soorten bessen", ""],
      ["Maak 7 items met Sage als ingrediënt", ""],
      ["Pluk 5 paddenstoelen en voer ze aan je paard", ""],
      ["Maak 9 items met Indian Tobacco als ingrediënt", ""],
      ["Pluk 15 verschillende soorten kruiden", ""],
      ["Maak en gebruik 5 Special Miracle Tonics", ""],
      ["Maak 6 gifwapens met Oleander", "Poison arrows of poison throwing knives"],
      ["Pluk één van elke kruidensoort", "Alle 30 kruiden, vier daarvan in New Austin. Zie <a href=\"#/plants\">Planten</a>."],
      ["Kruid en bak alle 11 soorten vlees", ""]
    ] },
    { id: "horseman", title: "Horseman", items: [
      ["Dood 5 konijnen vanaf je paard", ""],
      ["Spring binnen 15 seconden over 3 obstakels", ""],
      ["Rijd in minder dan 5 minuten van Valentine naar Rhodes", ""],
      ["Sleep te paard iemand 3300 voet (ca. 1 km) mee met je lasso", ""],
      ["Vertrap 5 dieren vanaf je paard", ""],
      ["Rijd van Strawberry naar Saint Denis in minder dan 9 minuten, zonder water te raken", ""],
      ["Dood 7 vijanden vanaf je paard zonder af te stijgen", ""],
      ["Dood 9 roofdieren vanaf je paard", ""],
      ["Rijd van Van Horn naar Blackwater in minder dan 17 minuten, zonder water te raken", ""],
      ["Tem (break) elk wild paardenras", ""]
    ] },
    { id: "hunter", title: "Master Hunter", items: [
      ["Vil 3 herten", ""],
      ["Verzamel 3 perfecte konijnenhuiden", ""],
      ["Volg (track) 10 verschillende diersoorten met je verrekijker", ""],
      ["Lok een dier en maak 5 keer een schone kill", ""],
      ["Vil 3 zwarte beren of grizzlyberen", ""],
      ["Dood 5 poema's met je boog en vil ze", ""],
      ["Lok met aas een planteneter en een roofdier en dood ze allebei", ""],
      ["Vang 3 vissen zonder hengel", ""],
      ["Vang een opossum die zich dood houdt", "Benader hem, hij speelt dood, en raap hem op"],
      ["Vind en dood de legendarische panter Giaguaro", "Ten westen van Shady Belle"]
    ] },
    { id: "sharp", title: "Sharpshooter", items: [
      ["Schiet 3 vliegende vogels neer", ""],
      ["Dood 2 verschillende diersoorten in één Dead Eye", ""],
      ["Schiet vanuit een rijdende trein 5 vliegende vogels neer", ""],
      ["Dood iemand op 80 voet (ca. 25 m) met een tomahawk", ""],
      ["Dood 6 dieren zonder van wapen te wisselen of te herladen", ""],
      ["Dood iemand op minstens 660 voet (ca. 200 m) met een geweer met lange scope", ""],
      ["Maak 7 headshots op rij", ""],
      ["Ontwapen 3 vijanden zonder te herladen of te wisselen", ""],
      ["Schiet in één Dead Eye 3 mensen hun hoed af", ""],
      ["Schiet 3 vliegende vogels neer met 3 opeenvolgende schoten met een lange scope", ""]
    ] },
    { id: "survival", title: "Survivalist", items: [
      ["Vang 3 bluegills", ""],
      ["Lever 5 dieren in bij het kamp of een Trapper", ""],
      ["Dood 5 dieren met een Varmint Rifle", ""],
      ["Maak dynamite-, fire-, improved-, poison- en small game-pijlen", ""],
      ["Vang een vis in de Bayou vanaf een rivierboot én staand op het spoor", ""],
      ["Dood 5 aaseters die op een lijk zitten te eten", ""],
      ["Dood 8 kleine dieren met opeenvolgende schoten met Small Game Arrows", ""],
      ["Maak een homing tomahawk, improved tomahawk, volatile dynamite en volatile fire bottle", ""],
      ["Vang een vis van minstens 19 pond", ""],
      ["Vang één van elke vissoort", ""]
    ] },
    { id: "weapons", title: "Weapons Expert", items: [
      ["Dood 3 vijanden met een mes", ""],
      ["Dood 3 vijanden in 10 seconden met alleen werpmessen", ""],
      ["Dood 3 roofvogels met alleen een tomahawk", ""],
      ["Dood 10 vijanden met een shotgun en zelfgemaakte munitie", ""],
      ["Dood 5 vijanden te paard met één werpmes per kill", ""],
      ["Dood 4 vijanden met één staaf dynamiet", ""],
      ["Dood 4 vijanden op rij door dezelfde tomahawk te gooien en op te rapen", ""],
      ["Dood 15 vijanden met een shotgun met lange loop", ""],
      ["Dood 9 nietsvermoedende vijanden van achteren met de boog", ""],
      ["Dood een grizzlybeer met alleen werpmessen, zonder schade op te lopen", ""]
    ] }
  ],
      status: (g, have) => ({ done: have === g.items.length, text: have === g.items.length ? "✓ rang 10" : `rang ${have}/10` })
    }],
    metrics: {
      done: () => RDR.ratio(groups().flatMap(g => g.keys)),
      categories: () => ({ have: groups().filter(g => RDR.count(g.keys) === g.items.length).length, total: groups().length })
    },
    meters: [["done", "Uitdagingen voltooid"], ["categories", "Categorieën compleet"]],
    v1: { store: "rdr2-challenges-v1", map: RDR.v1.byIndex("challenges") }
  });
})();
