// Explorer-uitdagingen: de route langs de schattenjachten. De vinkjes zijn die van de uitdagingen,
// de vindplaatsen komen uit de schatkaarten.
(() => {
  // Per rang: welke stap uit welke schattenjacht hem vervult. Rang 1 = een kaart vinden, 2-10 = de 9 vindplaatsen.
  const ROUTE = [["jackhall", 0], ["jackhall", 1], ["jackhall", 2], ["jackhall", 3],
                 ["poison", 1], ["poison", 2], ["poison", 3],
                 ["highstakes", 1], ["highstakes", 2], ["highstakes", 3]];
  const ranks = () => {
    const explorer = RDR.part("challenges", "explorer");
    return ROUTE.map(([huntId, step], i) => {
      const hunt = RDR.part("treasure", huntId), it = explorer.items[i], s = hunt.items[step];
      return { i, task: it.name, reward: it.where, hunt, stepKey: s.key, what: s.name, where: s.where, key: it.key };
    });
  };
  const nextRank = () => ranks().findIndex(r => !RDR.get(r.key));

  RDR.list({
    id: "explorer", title: "Explorer-schatten", nav: "Explorer", order: 190,
    heading: "Explorer-schatten Checklist", sub: "Red Dead Redemption 2 (story mode): de 10 Explorer-uitdagingen, rang voor rang, met de schat die je ervoor moet vinden.", blurb: "De 10 Explorer-uitdagingen: de route langs de schatten van drie schattenjachten, met de beloning per rang.",
    filter: "Verberg gehaalde rangen",
    tips: [
    "De Explorer-uitdagingen hebben geen eigen schatkaarten. <strong>Rang 1</strong> is een schatkaart vinden. <strong>Rang 2 tot en met 10</strong> haal je met de negen vindplaatsen van drie schattenjachten: <em>Jack Hall Gang</em>, <em>Poisonous Trail</em> en <em>High Stakes</em>.",
    "De rangen gaan <strong>op volgorde</strong>, maar welke schat je voor een rang vindt maakt niet uit. Hieronder staat de handigste route. De eerstvolgende rang staat <strong>vetgedrukt</strong>.",
    "Bij elke rang zie je of je die vindplaats al hebt afgevinkt op <a href=\"#/treasure\">Schatkaarten</a>. Een vinkje bij \"rang gehaald\" staat ook op <a href=\"#/challenges\">Uitdagingen</a>, en andersom.",
    "<strong>Volgorde in het spel:</strong> de kaart van de Jack Hall Gang koop je in hoofdstuk 2 van Maximo bij Flatneck Station. De kaart van Poisonous Trail ligt in Cairn Lodge. High Stakes kan pas vanaf hoofdstuk 3, als je de schattenjager tegenkomt (zie <a href=\"#/encounters\">Encounters</a>).",
    "Met rang 10 heb je de complete Explorer-uitrusting: holster, bandolier, gun belt en off-hand holster. Bij de schatten zelf vind je ook nog 9 goudstaven."
  ],
    sources: [
    [
      "rdr2.org (Explorer)",
      "https://www.rdr2.org/guides/explorer-challenges-guide/"
    ],
    [
      "GamerGuides (Explorer)",
      "https://gamerguides.com/red-dead-redemption-2/guide/extras/challenges/explorer-challenges"
    ],
    [
      "rdr2.org (beloningen)",
      "https://www.rdr2.org/wiki/challenges/"
    ],
    [
      "PowerPyx (schatkaarten)",
      "https://www.powerpyx.com/red-dead-redemption-2-treasure-map-locations-solutions/"
    ]
  ],
    sections: () => [{
      type: "cards", id: "ranks",
      items: ranks().map(r => ({
        id: `rank-${r.i + 1}`, name: `Rang ${r.i + 1}: ${r.task}`, r,
        note: `Beloning: ${r.reward}`,
        desc: `<strong>${r.hunt.title}</strong>: ${r.what}<span class="where">${r.where}</span>`,
        checks: [{ id: "done", label: "<strong>Rang gehaald</strong>", key: r.key }]
      })),
      live: it => RDR.get(it.r.stepKey) ? "✓ Afgevinkt op <a href=\"#/treasure\">Schatkaarten</a>"
        : "Nog niet afgevinkt op <a href=\"#/treasure\">Schatkaarten</a>",
      status: (it, done) => done ? "✓ gehaald" : RDR.get(it.r.stepKey) ? "schat gevonden" : it.r.i === nextRank() ? "volgende" : ""
    }],
    metrics: {
      ranks: () => RDR.ratio(ranks().map(r => r.key)),
      finds: () => RDR.ratio(ranks().map(r => r.stepKey))
    },
    meters: [["ranks", "Explorer-rangen"], ["finds", "Vindplaatsen (uit Schatkaarten)"]],
    v1: { store: "rdr2-challenges-v1", prefs: [["explorer-hide", "hide"]] }
  });
})();
