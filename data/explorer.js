// Explorer challenges: the route through the treasure hunts. The checkboxes are those of the challenges,
// the locations come from the treasure maps.
(() => {
  // Per rank: which step of which treasure hunt fulfils it. Rank 1 = find a map, 2-10 = the 9 locations.
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
    id: "explorer", title: "Explorer treasures", nav: "Explorer", order: 190, group: "Challenges & treasure",
    heading: "Explorer Treasures Checklist", sub: "Red Dead Redemption 2 (story mode): the 10 Explorer challenges, rank by rank, with the treasure you need to find for each.", blurb: "The 10 Explorer challenges: the route through the treasures of three treasure hunts, with the reward per rank.",
    filter: "Hide ranks you have reached",
    tips: [
    "The Explorer challenges have no treasure maps of their own. <strong>Rank 1</strong> is finding a treasure map. <strong>Ranks 2 through 10</strong> come from the nine locations of three treasure hunts: <em>Jack Hall Gang</em>, <em>Poisonous Trail</em> and <em>High Stakes</em>.",
    "The ranks go <strong>in order</strong>, but which treasure you find for a rank does not matter. Below is the most convenient route. The next rank is shown in <strong>bold</strong>.",
    "Each rank shows whether you have already checked off that location on <a href=\"#/treasure\">Treasure maps</a>. A \"rank reached\" check also appears on <a href=\"#/challenges\">Challenges</a>, and vice versa.",
    "<strong>Order in the game:</strong> you buy the Jack Hall Gang map in chapter 2 from Maximo at Flatneck Station. The Poisonous Trail map is in Cairn Lodge. High Stakes is only possible from chapter 3, when you run into the treasure hunter (see <a href=\"#/encounters\">Encounters</a>).",
    "At rank 10 you have the complete Explorer outfit: holster, bandolier, gun belt and off-hand holster. The treasures themselves also hold 9 gold bars."
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
      "rdr2.org (rewards)",
      "https://www.rdr2.org/wiki/challenges/"
    ],
    [
      "PowerPyx (treasure maps)",
      "https://www.powerpyx.com/red-dead-redemption-2-treasure-map-locations-solutions/"
    ]
  ],
    sections: () => [{
      type: "cards", id: "ranks",
      items: ranks().map(r => ({
        id: `rank-${r.i + 1}`, name: `Rank ${r.i + 1}: ${r.task}`, r,
        note: `Reward: ${r.reward}`,
        desc: `<strong>${r.hunt.title}</strong>: ${r.what}<span class="where">${r.where}</span>`,
        checks: [{ id: "done", label: "<strong>Rank reached</strong>", key: r.key }]
      })),
      live: it => RDR.get(it.r.stepKey) ? "✓ Checked off on <a href=\"#/treasure\">Treasure maps</a>"
        : "Not yet checked off on <a href=\"#/treasure\">Treasure maps</a>",
      status: (it, done) => done ? "✓ reached" : RDR.get(it.r.stepKey) ? "treasure found" : it.r.i === nextRank() ? "next" : ""
    }],
    metrics: {
      ranks: () => RDR.ratio(ranks().map(r => r.key)),
      finds: () => RDR.ratio(ranks().map(r => r.stepKey))
    },
    meters: [["ranks", "Explorer ranks"], ["finds", "Locations (from Treasure maps)"]]
  });
})();
