(() => {
  const SATCHELS = [
    { id: "valuables",   name: "Valuables Satchel",   pelts: ["deer", "beaver", "rabbit"],   req: "Donate $50 to the camp box" },
    { id: "materials",   name: "Materials Satchel",   pelts: ["deer", "boar", "iguana"],     req: "Craft 3 recipes at a campfire" },
    { id: "provisions",  name: "Provisions Satchel",  pelts: ["deer", "bison", "raccoon"],   req: "Upgrade the provisions wagon twice" },
    { id: "kit",         name: "Kit Satchel",         pelts: ["deer", "elk", "panther"],     req: "Donate 3 valuables to the camp box" },
    { id: "ingredients", name: "Ingredients Satchel", pelts: ["deer", "badger", "squirrel"], req: "Donate 5 carcasses to Pearson" },
    { id: "tonics",      name: "Tonics Satchel",      pelts: ["deer", "buck", "elk"],        req: "Upgrade the medicine wagon twice" },
    { id: "legend",      name: "Legend of the East Satchel", pelts: ["deer", "wolf", "cougar"], req: "Crafted the other 6 satchels" }
  ];
  const peltKey = (s, a) => `satchels.pelt:${s}:${a}`;
  const label = a => RDR.animalLabel(a);
  const needs = () => {
    const n = {};
    SATCHELS.forEach(s => s.pelts.forEach(a => (n[a] = n[a] || []).push(s)));
    return n;
  };

  RDR.list({
    id: "satchels", title: "Satchels", order: 10, group: "Hunting & camp",
    heading: "Satchel Pelt Checklist", sub: "Red Dead Redemption 2 (story mode): every perfect pelt Pearson needs for the 7 satchels.", blurb: "Every perfect pelt Pearson needs for the 7 satchels.",
    filter: "Hide animals that are already complete",
    tips: [
    "<strong>The animal must already have 3 stars.</strong> The right weapon and a headshot <em>keep</em> the quality, but never make a 1- or 2-star animal perfect. Study the animal first with binoculars or by aiming and studying.",
    "<strong>One shot, one kill.</strong> A second shot, the wrong weapon or explosive/incendiary ammo lowers the quality. Use Dead Eye to see the weak spot: usually the head, sometimes the heart.",
    "Not sure about the weapon? After studying, the animal's info screen shows the recommended weapon.",
    "Use <strong>regular</strong> ammo. Split Point is fine, but explosive or incendiary ammo ruins the pelt.",
    "The <strong>squirrel</strong> is a carcass: do not skin it, just pick it up and carry it.",
    "Your horse can carry only one large pelt at a time, so bring them straight to Pearson or hunt close to camp. Pelts and carcasses rot over time.",
    "Deer, bucks and most small animals often spawn around camp. Hunt the 7 perfect deer pelts there first.",
    "Pearson only crafts the satchels in camp (chapter 2 through 6), so collect everything before the epilogue. Want to decorate the camp as well? See <a href=\"#/camp\">Camp decorations</a>."
  ],
    sources: [
    [
      "rdr2.org (Pearson crafting)",
      "https://www.rdr2.org/guides/pearson-crafting-guide/"
    ],
    [
      "PowerPyx (animal locations)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/"
    ],
    [
      "PowerPyx (perfect pelts)",
      "https://www.powerpyx.com/red-dead-redemption-2-how-to-get-perfect-pelts/"
    ],
    [
      "HighGround Gaming",
      "https://www.highgroundgaming.com/rdr2-satchel-upgrade-guide/"
    ],
    [
      "Mein-MMO",
      "https://mein-mmo.de/en/how-to-get-perfect-pelts-in-red-dead-redemption-2,283915"
    ]
  ],
    sections: [
      { type: "checklist", title: "Needed first", groups: [{ id: "prep", title: "Pearson",
        intro: "Each satchel costs <strong>1 perfect deer pelt + 2 other perfect pelts</strong> and has its own requirement. Legend of the East is only possible once the other six are done.",
        // The same upgrade as for the camp decorations, so one shared checkbox.
        items: [{ id: "leather", key: "satchels.leather", name: "Buy <strong>Leather Working Tools</strong> through the camp ledger at Pearson's wagon. Without this upgrade Pearson cannot craft satchels." }] }] },
      { type: "custom", title: "Per satchel",
        render: () => `<div class="grid">${SATCHELS.map(s => `
          <section class="card" data-satchel="${s.id}">
            <div class="card-head"><h3>${s.name}</h3><span class="status"></span></div>
            <ul class="checks">
              ${s.pelts.map(a => `<li>${RDR.box(peltKey(s.id, a), `Perfect ${label(a).toLowerCase()}${a === "squirrel" ? " (carcass)" : ""}${RDR.tag(RDR.ANIMALS[a].weapon)}`)}</li>`).join("")}
              <li class="sep">${RDR.box(`satchels.req:${s.id}`, `<em>Requirement:</em> ${s.req}`)}</li>
              <li>${RDR.box(`satchels.craft:${s.id}`, "<strong>Crafted by Pearson</strong>")}</li>
            </ul>
          </section>`).join("")}</div>`,
        refresh: (def, el) => SATCHELS.forEach(s => {
          const have = RDR.count(s.pelts.map(a => peltKey(s.id, a)));
          const done = !!RDR.get(`satchels.craft:${s.id}`);
          const card = el.querySelector(`[data-satchel="${s.id}"]`);
          card.classList.toggle("done", done);
          card.querySelector(".status").textContent = done ? "✓ crafted"
            : have === s.pelts.length && RDR.get(`satchels.req:${s.id}`) ? "ready to craft" : `${have}/${s.pelts.length} pelts`;
        }) },
      { type: "custom", title: "Shopping list per animal",
        intro: "The same boxes as above, grouped by species. A check here also shows up on the satchel.",
        render: () => {
          const n = needs();
          return Object.keys(n).sort((a, b) => n[b].length - n[a].length || label(a).localeCompare(label(b)))
            .map(a => RDR.animalCard(a, n[a].length, n[a].map(s => `<li>${RDR.box(peltKey(s.id, a), `for ${s.name.replace(" Satchel", "")}`)}</li>`).join(""))).join("");
        },
        refresh: () => RDR.refreshAnimalCards(RDR.pref("satchels.hide")) },
      { type: "custom", title: "Weapon by size", render: () => RDR.weaponTable([
          ["Tiny", "Squirrel", "<strong>Bow + Small Game Arrows</strong>", "Varmint Rifle (can damage the carcass)"],
          ["Small", "Rabbit, iguana, raccoon, badger, beaver", "<strong>Varmint Rifle</strong> (regular .22 ammo)", "Bow + Small Game Arrows"],
          ["Big", "Deer, buck, boar, wolf, cougar, panther", "<strong>Springfield or Bolt Action Rifle</strong>, regular ammo", "Bow with regular arrows (or poison arrows)"],
          ["Gigantic", "Elk, bison", "<strong>Rolling Block or Carcano (sniper)</strong>, regular ammo", "Springfield/Bolt Action, or bow with Improved Arrows"]
        ]) }
    ],
    metrics: {
      pelts: () => RDR.ratio(SATCHELS.flatMap(s => s.pelts.map(a => peltKey(s.id, a)))),
      reqs: () => RDR.ratio(SATCHELS.map(s => `satchels.req:${s.id}`)),
      crafted: () => RDR.ratio(SATCHELS.map(s => `satchels.craft:${s.id}`))
    },
    meters: [["pelts", "Pelts collected"], ["reqs", "Requirements met"], ["crafted", "Satchels crafted"]]
  });
})();
