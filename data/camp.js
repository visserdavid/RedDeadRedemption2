(() => {
  const DECOR = [
    { id: "gatorskull",  name: "Alligator Skull",               items: [["alligator", "pelt", 1]] },
    { id: "ramskull",    name: "Big Horn Ram Skull",            items: [["ram", "carcass", 1]] },
    { id: "cougarchest", name: "Cougar Pelt Covered Chest",     items: [["cougar", "pelt", 2]] },
    { id: "boartable",   name: "Boar Skin Table Cover",         items: [["boar", "pelt", 1]] },
    { id: "boarrug",     name: "Boar Skin Rug",                 items: [["boar", "pelt", 4]] },
    { id: "oxrug",       name: "Ox Hide Rug",                   items: [["ox", "pelt", 2]] },
    { id: "pronghtable", name: "Pronghorn Leather Table Tops",  items: [["pronghorn", "pelt", 2]] },
    { id: "pronghskull", name: "Pronghorn Skull",               items: [["pronghorn", "carcass", 1]] },
    { id: "wolfskull",   name: "Wolf Skull",                    items: [["wolf", "carcass", 1]] },
    { id: "logseat",     name: "Campfire Log Seat Cover",       items: [["wolf", "pelt", 2]] },
    { id: "banjo",       name: "Snake Skin Banjo Head",         items: [["snake", "pelt", 2]] },
    { id: "campseat",    name: "Campfire Seat Cover",           items: [["beaver", "pelt", 1], ["muskrat", "pelt", 1], ["fox", "pelt", 1]] },
    { id: "leanto",      name: "Lean-to Cow Hide Ground Cover", items: [["cow", "pelt", 1]] },
    { id: "scoutfire",   name: "Scout Fire Ground Cover",       items: [["goat", "pelt", 2]] },
    { id: "mooseant",    name: "Moose Antlers",                 items: [["moose", "antlers", 1]] },
    { id: "elkant",      name: "Elk Antlers",                   items: [["elk", "antlers", 1]] },
    { id: "bones",       name: "Hanging Bones",                 items: [["buck", "antlers", 1]] }
  ];
  // One slot per physical item, shared by the decoration cards and the animal list.
  const SLOTS = DECOR.flatMap(d => d.items.flatMap(([animal, kind, n]) =>
    Array.from({ length: n }, (_, j) => ({ key: `camp.item:${d.id}:${animal}:${kind}:${j + 1}`, decor: d, animal, kind, i: j + 1, n }))));
  const kindText = (a, kind) => {
    const name = RDR.animalLabel(a).toLowerCase();
    return kind === "pelt" ? `Perfect pelt: ${name}` : kind === "carcass" ? `Perfect carcass: ${name}` : `Antlers: ${name}`;
  };
  const nth = s => (s.n > 1 ? ` (${s.i}/${s.n})` : "");

  RDR.list({
    id: "camp", title: "Camp decorations", nav: "Camp", order: 20, group: "Hunting & camp",
    sub: "Red Dead Redemption 2 (story mode): every animal item Pearson needs to fully decorate the camp.", blurb: "Every animal item Pearson needs to fully decorate the camp.",
    filter: "Hide animals that are already complete",
    tips: [
    "<strong>The animal must already have 3 stars.</strong> The right weapon and a clean one-shot kill <em>keep</em> that quality, but never make a 1- or 2-star animal perfect. So study the animal first.",
    "<strong>Do not skin carcasses.</strong> For the ram, pronghorn and wolf skulls Pearson wants the whole perfect carcass. Put it on your horse and ride straight to camp.",
    "<strong>Wolf and pronghorn: hunt 3 of each.</strong> You use the pelt of two of them and bring the third back whole.",
    "<strong>Ox, cow and goat are livestock.</strong> Shoot them out of sight of farmers and other witnesses, or you risk a bounty and lose honor.",
    "For antlers you need a <strong>male</strong>: a bull elk, a bull moose or a buck. You get the antlers when you skin it.",
    "Your horse carries only one large carcass or one large pelt at a time, so plan short trips and bring everything straight to Pearson. Carcasses rot over time.",
    "The Boar Skin Rug needs 4 boar pelts. If you also craft the satchels, you need 6 perfect boar pelts in total.",
    "Pearson only crafts in camp (chapter 2 through 6), so collect everything before the epilogue. The other camp upgrades from the ledger, and the gang's item requests, are on <a href=\"#/camplife\">Camp life</a>."
  ],
    sources: [
    [
      "rdr2.org (Pearson crafting)",
      "https://www.rdr2.org/guides/pearson-crafting-guide/"
    ],
    [
      "rdr2.org forum (Pearson materials)",
      "https://www.rdr2.org/forums/topic/3979-red-dead-redemption-2-pearson-crafting-materials-guide/"
    ],
    [
      "GosuNoob (totals)",
      "https://www.gosunoob.com/red-dead-redemption-2/crafting-ingredients-pearson-trapper/"
    ],
    [
      "PowerPyx (animal locations)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/"
    ],
    [
      "PowerPyx (perfect pelts)",
      "https://www.powerpyx.com/red-dead-redemption-2-how-to-get-perfect-pelts/"
    ]
  ],
    sections: [
      { type: "checklist", title: "Needed first", groups: [{ id: "prep", title: "Pearson",
        intro: "These decorations are purely cosmetic: they add no new features, just a nicer camp. Pelts and carcasses must be <strong>perfect</strong>. The sources list no quality requirement for antlers.",
        items: [{ id: "leather", key: "satchels.leather", name: "Buy <strong>Leather Working Tools</strong> through the camp ledger at Pearson's wagon. This is the same upgrade as for the <a href=\"#/satchels\">satchels</a>." }] }] },
      { type: "custom", title: "Per decoration",
        render: () => `<div class="grid">${DECOR.map(d => `
          <section class="card" data-decor="${d.id}">
            <div class="card-head"><h3>${d.name}</h3><span class="status"></span></div>
            <ul class="checks">
              ${SLOTS.filter(s => s.decor === d).map(s => `<li>${RDR.box(s.key, `${kindText(s.animal, s.kind)}${nth(s)}${RDR.tag(RDR.ANIMALS[s.animal].weapon)}`)}</li>`).join("")}
              <li class="sep">${RDR.box(`camp.craft:${d.id}`, "<strong>Crafted by Pearson</strong>")}</li>
            </ul>
          </section>`).join("")}</div>`,
        refresh: (def, el) => DECOR.forEach(d => {
          const slots = SLOTS.filter(s => s.decor === d);
          const have = RDR.count(slots.map(s => s.key));
          const done = !!RDR.get(`camp.craft:${d.id}`);
          const card = el.querySelector(`[data-decor="${d.id}"]`);
          card.classList.toggle("done", done);
          card.querySelector(".status").textContent = done ? "✓ crafted" : have === slots.length ? "ready to craft" : `${have}/${slots.length} items`;
        }) },
      { type: "custom", title: "Shopping list per animal",
        intro: "The same boxes as above, grouped by species. A check here also shows up on the decoration.",
        render: () => {
          const by = {};
          SLOTS.forEach(s => (by[s.animal] = by[s.animal] || []).push(s));
          return Object.keys(by).sort((a, b) => by[b].length - by[a].length || RDR.animalLabel(a).localeCompare(RDR.animalLabel(b)))
            .map(a => RDR.animalCard(a, by[a].length, by[a].map(s => `<li>${RDR.box(s.key, `for ${s.decor.name}${nth(s)}${RDR.tag(s.kind)}`)}</li>`).join(""))).join("");
        },
        refresh: () => RDR.refreshAnimalCards(RDR.pref("camp.hide")) },
      { type: "custom", title: "Weapon by size", render: () => RDR.weaponTable([
          ["Tiny", "Snake", "<strong>Bow + Small Game Arrows</strong>", "Varmint Rifle (can damage the pelt)"],
          ["Small", "Beaver, muskrat", "<strong>Varmint Rifle</strong> (regular .22 ammo)", "Bow + Small Game Arrows"],
          ["Medium", "Fox", "<strong>Bow with regular arrows</strong>", "Varmint Rifle or repeater"],
          ["Big", "Boar, wolf, cougar, ram, pronghorn, goat, small alligator", "<strong>Springfield or Bolt Action Rifle</strong>, regular ammo", "Bow with regular arrows (or poison arrows)"],
          ["Gigantic", "Ox, cow, adult alligator, moose, elk", "<strong>Rolling Block or Carcano (sniper)</strong>, regular ammo", "Springfield/Bolt Action, or bow with Improved Arrows"]
        ]) }
    ],
    metrics: {
      items: () => RDR.ratio(SLOTS.map(s => s.key)),
      crafted: () => RDR.ratio(DECOR.map(d => `camp.craft:${d.id}`))
    },
    meters: [["items", "Items collected"], ["crafted", "Decorations crafted"]]
  });
})();
