(() => {
  const hunts = () => RDR.groupsOf("treasure");
  const found = h => !!RDR.get(h.keys[h.keys.length - 1]);
  RDR.list({
    id: "treasure", title: "Schatkaarten", order: 180,
    heading: "Schatkaarten Checklist", sub: "Red Dead Redemption 2 (story mode): de schattenjachten met goudstaven, stap voor stap.", blurb: "De schattenjachten met goudstaven, stap voor stap.",
    tips: [
    "Elke kaart is een tekening van een plek, met een korte tekst. Op die plek vind je de volgende kaart, en bij de laatste ligt de schat.",
    "Een goudstaaf verkoop je voor <strong>$500</strong> bij een Fence. Alle goudstaven, ook buiten de schattenjachten, staan op <a href=\"#/gold\">Goudstaven</a>. Daar heb je in hoofdstuk 2 al veel aan, bijvoorbeeld voor kampupgrades en wapens.",
    "Voor 100% is één schattenjacht genoeg. Deze drie jachten (Jack Hall Gang, Poisonous Trail en High Stakes) leveren samen ook alle 10 <a href=\"#/explorer\">Explorer-rangen</a> op."
  ],
    sources: [
    [
      "PowerPyx (alle schatkaarten)",
      "https://www.powerpyx.com/red-dead-redemption-2-treasure-map-locations-solutions/"
    ],
    [
      "rdr2.org (Jack Hall Gang)",
      "https://www.rdr2.org/guides/jack-hall-gang-treasure-hunt-guide/"
    ],
    [
      "Push Square (High Stakes)",
      "https://pushsquare.com/guides/red-dead-redemption-2-all-high-stakes-treasure-map-locations"
    ]
  ],
    sections: [{
      type: "checklist", groupHeadings: true, goalLast: true,
      // De laatste stap van elke jacht is de schat zelf.
      groups: [
    { id: "jackhall", title: "Jack Hall Gang", gold: 2, when: "Vanaf hoofdstuk 2",
      intro: "Beloning: 2 goudstaven ($1000).",
      items: [
        ["Kaart 1 gekocht", "Van Maximo bij Flatneck Station (stranger-missie <em>All That Glitters</em>), voor $10 of $5 als je afdingt"],
        ["Kaart 2 gevonden bij Caliban's Seat", "Volg de richels aan de rechterkant tot een spleet in de rotswand"],
        ["Kaart 3 gevonden bij Cotorra Springs", "Stapels stenen in een rechthoek tussen de geisers. Graaf onder de middelste stapel."],
        ["Schat gevonden bij O'Creagh's Run", "Op een klein eilandje in het meer, onder een kleine rots"]
      ] },
    { id: "poison", title: "Poisonous Trail", gold: 4, when: "Vanaf hoofdstuk 2",
      intro: "Beloning: 4 goudstaven ($2000).",
      items: [
        ["Kaart 1 gevonden in Cairn Lodge", "In het besneeuwde noordwesten. De kaart ligt in een kistje onder het bed."],
        ["Kaart 2 gevonden", "Een heuvel met een omgevallen boom en een dode boom die nog staat. De kaart zit in de dode boom."],
        ["Kaart 3 gevonden", "Op de top van een heuvel met een stenen formatie, in een gat in het midden"],
        ["Schat gevonden", "In een grot achter de waterval bij Elysian Pool. Neem een lantaarn mee, houd rechts aan en zoek de verborgen gangen."]
      ] },
    { id: "highstakes", title: "High Stakes", gold: 3, when: "Vanaf hoofdstuk 3",
      intro: "Beloning: 3 goudstaven ($1500).",
      items: [
        ["Kaart 1 van de schattenjager", "Een willekeurige ontmoeting met een schattenjager. Vang hem met je lasso en bind hem vast, dan krijg je de kaart."],
        ["Kaart 2 gevonden bij Cumberland Falls", "Achter de waterval, via de boomstam aan de rechterkant"],
        ["Kaart 3 gevonden bij Barrow Lagoon", "Een afgebroken boomstronk tussen de rotsen op een kleine heuvel"],
        ["Schat gevonden bij Bacchus Station", "Daal af over de rotsplateaus boven de rivier, tot je bij een spleet in de rotsen komt"]
      ] },
    { id: "tresor", title: "Le Trésor des Morts", gold: 6, when: "Alleen Special/Ultimate Edition of pre-orderbonus",
      intro: "Beloning: 6 goudstaven ($3000). PowerPyx noemt er 5, andere gidsen 6.",
      items: [
        ["Kaart 1 gevonden", "In het enige niet-afgebrande gebouw tussen de ruïnes, naast een lijk"],
        ["Kaart 2 gevonden onder het rangeerterrein van Saint Denis", "In de ondergrondse gang, in de muur naast een houten krat"],
        ["Kaart 3 gevonden op het kerkhof van Saint Denis", "In een gebouw op het kerkhof"],
        ["Schat gevonden", "De goudstaven liggen op het kerkhof"]
      ] },
    { id: "landmarks", title: "Landmarks of Riches", gold: 6, when: "Vanaf hoofdstuk 2. Kwam met de pc-versie, later ook op PS4 en Xbox One.",
      intro: "Beloning: 6 goudstaven ($3000), samen met Le Trésor des Morts de grootste schat.",
      items: [
        ["Kaart 1 gevonden bij de Obelisk", "Ten noordwesten van Strawberry (West Elizabeth). Bekijk het plaatje aan de achterkant van de obelisk."],
        ["Kaart 2 gevonden bij de Tiny Church", "Bayou Nwa, ten noorden van Saint Denis. In het kleine klokkentorentje op het dak."],
        ["Kaart 3 gevonden bij de Mysterious Hill Home", "Grizzlies East (Ambarino). Door een kapot raam met losse planken op het dak."],
        ["Kaart 4 gevonden bij Bolger Glade", "Scarlett Meadows (Lemoyne). In een gat onder in een boom bij een kapot kanon."],
        ["Schat gevonden op Mount Shann", "Bij de grote zonnewijzer op de top van Mount Shann (West Elizabeth). Bekijk de gemarkeerde steen."]
      ] },
    { id: "elemental", title: "Elemental Trail", gold: 0, when: "Epiloog. Kwam met de pc-versie.",
      intro: "Beloning: de <a href=\"#/trinkets\">Crow Beak Trinket</a> (+10% munitie bij het looten).",
      items: [
        ["Kaart 1 gevonden", "Helemaal in het westen van New Austin, bij de Sea of Coronado. Schiet het touw van een opgehangen lichaam door en doorzoek het."],
        ["Kaart 2 gevonden", "Een afgebrand huis ten oosten van Lake Don Julio, ten zuiden van Armadillo. In de schoorsteen."],
        ["Kaart 3 gevonden", "Het oude aquaduct bij Benedict Point, ten zuiden van Tumbleweed. Tussen twee planken."],
        ["Schat gevonden bij Coot's Chapel", "Op het kerkhof links van de kerk, ten zuidoosten van Armadillo. Bekijk de steen naast een graf met een houten kruis."]
      ] },
    { id: "mended", title: "Mended Treasure Map (Otis Miller)", gold: 0, when: "Stukken vanaf hoofdstuk 2, schat pas in de epiloog",
      intro: "Beloning: Otis Miller's Revolver en een setje foto's. Geen goud, maar wel een unieke revolver.",
      items: [
        ["Kaartstuk 1 gevonden", "In een la in een houten hut aan het begin van Little Creek River"],
        ["Kaartstuk 2 gevonden", "In een la in een huis bij Manito Glade. Samen vormen de stukken de Mended Treasure Map."],
        ["Schat gevonden", "In een klein grotje ten westen van Twin Rocks (New Austin, epiloog)"]
      ] },
    { id: "chick", title: "Chick's Treasure Map", gold: 0, when: "Hoofdstuk 2 (missie <em>Money Lending and Other Sins</em>)",
      intro: "Beloning: $35. <strong>Missable:</strong> je moet er eerder zijn dan Chick Matthews.",
      items: [
        ["Kaart gekregen", "Tijdens de missie <em>Money Lending and Other Sins</em>"],
        ["Schat gevonden", "Ga er direct heen, voordat Chick er is"]
      ] }
  ].map(h => ({ ...h, meta: h.when })),
      status: (h, have) => ({ done: found(h), text: found(h) ? "✓ gevonden" : `${have}/${h.items.length} stappen` })
    }],
    found,
    metrics: {
      steps: () => RDR.ratio(hunts().flatMap(h => h.keys)),
      found: () => ({ have: hunts().filter(found).length, total: hunts().length }),
      gold: () => ({ have: RDR.sum(hunts().filter(found), h => h.gold), total: RDR.sum(hunts(), h => h.gold) })
    },
    meters: [["steps", "Stappen gedaan"], ["found", "Schatten gevonden"], ["gold", "Goudstaven"]],
    v1: { store: "rdr2-treasure-v1", map: RDR.v1.byIndex("treasure") }
  });
})();
