(() => {
  const requests = [
    { id: "r1", name: "Opdracht 1", reward: "$110", items: [
      ["littleegret",  "Little Egret Plume",       5,  "veer"],
      ["reddishegret", "Reddish Egret Plume",      5,  "veer"],
      ["snowyegret",   "Snowy Egret Plume",        5,  "veer"],
      ["ladynight",    "Lady of the Night Orchid", 15, "boom"] ] },
    { id: "r2", name: "Opdracht 2", reward: "$125", items: [
      ["heron",        "Heron Plume",              20, "veer"],
      ["ladyslipper",  "Lady Slipper Orchid",      7,  "grond"],
      ["moccasin",     "Moccasin Flower Orchid",   10, "grond"] ] },
    { id: "r3", name: "Opdracht 3", reward: "$150", items: [
      ["gatoregg",     "Alligatorei (Gator Egg)",  25, "nest"],
      ["acuna",        "Acuna's Star Orchid",      3,  "boom"],
      ["cigar",        "Cigar Orchid",             7,  "boom"],
      ["ghost",        "Ghost Orchid",             5,  "boom"] ] },
    { id: "r4", name: "Opdracht 4", reward: "$175", items: [
      ["spoonbill",    "Spoonbill Plume",          30, "veer"],
      ["rattail",      "Rat Tail Orchid",          10, "boom"],
      ["spider",       "Spider Orchid",            5,  "boom"],
      ["nightscent",   "Night Scented Orchid",     5,  "boom"] ] },
    { id: "r5", name: "Opdracht 5", reward: "$200 + Algernon's Revolver + Exotic Hat", items: [
      ["clamshell",    "Clamshell Orchid",         5,  "boom"],
      ["queens",       "Queen's Orchid",           5,  "grond"],
      ["sparrow",      "Sparrow's Egg Orchid",     10, "grond"],
      ["dragon",       "Dragon's Mouth Orchid",    5,  "grond"] ] }
  ];
  const groups = () => RDR.groupsOf("exotics").filter(g => g.id !== "prep");
  // Een ingeleverde opdracht telt als compleet, ook als de tellers nooit zijn ingevuld.
  const value = (g, it) => RDR.get(g.finishKey) ? it.max : Math.min(RDR.get(it.key) || 0, it.max);
  RDR.list({
    id: "exotics", title: "Exotics", order: 70,
    heading: "Exotics Checklist", sub: "Red Dead Redemption 2 (story mode): alle veren, eieren en orchideeën voor Algernon Wasp (stranger-missie <em>Duchesses and Other Animals</em>).", blurb: "Veren, alligatoreieren en orchideeën voor Algernon Wasp in Saint Denis.",
    tips: [
    "<strong>Reigers en zilverreigers</strong> (egrets, herons) leven in het westen van de Bayou, rond Lagras en Bluewater Marsh. Rond het middaguur zijn er de meeste. Markeer ze in Dead Eye voordat ze opvliegen. Elk wapen doodt ze in één schot, en de kwaliteit van de veer maakt niet uit.",
    "<strong>Lepelaars</strong> (spoonbills) hebben een eigen gebied ten oosten van de Kamassa River, bij de spoorlijn. Er spawnen er zo'n vijf per bezoek.",
    "Zijn de vogels op? Laad een save opnieuw, of reis even weg (bijvoorbeeld naar Rhodes) en slaap een paar uur. Dan spawnen ze opnieuw.",
    "<strong>Alligatoreieren</strong> liggen in nesten van 3 tot 5 eieren in de moerassen ten noorden en zuiden van Shady Belle en op de eilandjes ten oosten ervan. Met Eagle Eye glanzen ze goud. Er liggen bijna altijd volwassen alligators in de buurt.",
    "<strong>Orchideeën</strong> staan op vaste plekken, vooral in de moerassen van Lemoyne (Bayou Nwa, Bluewater Marsh) en in Roanoke Ridge. Ze groeien aan bomen of op de grond (zie de tag) en lichten op in Eagle Eye. Een kaart met alle plekken staat in de gids van PowerPyx (zie bronnen).",
    "Geplukte planten groeien na verloop van tijd terug. Kom je er een paar tekort, ga dan na een paar dagen in de game terug naar dezelfde plek."
  ],
    sources: [
    [
      "rdr2.org (exotics)",
      "https://www.rdr2.org/guides/duchesses-and-other-animals-exotics-guide/"
    ],
    [
      "PowerPyx (exotics-locaties en kaarten)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-exotics-locations/"
    ],
    [
      "GamerGuides",
      "https://www.gamerguides.com/red-dead-redemption-2/side-missions/stranger-missions/duchesses-and-other-animals"
    ]
  ],
    requests,
    value: (rid, id) => { const g = RDR.part("exotics", rid); return value(g, g.items.find(i => i.id === id)); },
    sections: [
      { type: "checklist", title: "Eerst nodig", groups: [{ id: "prep", title: "Algernon Wasp",
        intro: "Er zijn 5 opdrachten, die je op volgorde inlevert. Je kunt alles al vooruit verzamelen. Na de laatste opdracht krijg je <strong>Algernon's Revolver</strong> en de <strong>Exotic Hat</strong>, plus in totaal $760.",
        items: [{ id: "start", name: "<strong>Algernon Wasp gesproken</strong> in het noorden van Saint Denis. Hij verschijnt in hoofdstuk 4, na de missie <em>The Gilded Cage</em>." }] }] },
      { type: "counters", title: "Per opdracht", override: value,
        groups: requests.map(r => ({ id: r.id, title: r.name, items: r.items,
          finish: `<strong>Ingeleverd bij Algernon</strong> <span class="muted small">(${r.reward})</span>` })),
        status: (g, full, done) => done ? "✓ ingeleverd" : full === g.items.length ? "klaar om in te leveren" : `${full}/${g.items.length} compleet` }
    ],
    metrics: {
      items: () => ({
        have: RDR.sum(groups(), g => RDR.sum(g.items, it => value(g, it))),
        total: RDR.sum(groups(), g => RDR.sum(g.items, it => it.max))
      }),
      turnedIn: () => RDR.ratio(groups().map(g => g.finishKey))
    },
    meters: [["items", "Items verzameld"], ["turnedIn", "Opdrachten ingeleverd"]],
    v1: {
      store: "rdr2-exotics-v1",
      map: k => {
        if (k === "start") return RDR.part("exotics", "prep").keys[0];
        if (k.startsWith("done:")) return RDR.part("exotics", k.slice(5)).finishKey;
        if (k.startsWith("n:")) { const it = groups().flatMap(g => g.items).find(i => i.id === k.slice(2)); return it ? it.key : null; }
        return null;
      }
    }
  });
})();
