// Common animals Pearson needs (satchels and camp decorations).
RDR.ANIMALS = {
  deer:      { name: "Deer (Whitetail Deer)", size: "Big", weapon: "Springfield / Bolt Action or bow",
               where: "Common in the forests of New Hanover, Lemoyne and West Elizabeth. Good spots: Big Valley, Cumberland Forest, around Horseshoe Overlook and the Heartlands. Often spawns close to camp." },
  buck:      { name: "Buck (Whitetail Buck)", size: "Big", weapon: "Springfield / Bolt Action or bow",
               where: "Wooded areas all over the map, such as Big Valley, Cumberland Forest and the area around Horseshoe Overlook. You get the antlers when you skin it." },
  elk:       { name: "Elk", size: "Gigantic", weapon: "Rolling Block / Carcano",
               where: "Ambarino and northern New Hanover. Best spots: around Cotorra Springs, north of Bacchus Station and Roanoke Ridge north of Annesburg (up to the edge of the map). Only the bull elk has antlers." },
  panther:   { name: "Panther", size: "Big", weapon: "Springfield / Bolt Action or bow",
               where: "Only in the remote swamp forests of Lemoyne: Bayou Nwa and Bluewater Marsh, around Lakay and Bolger Glade. Rare and dangerous, so keep a second weapon ready. Only reachable once you are in Lemoyne." },
  cougar:    { name: "Cougar", size: "Big", weapon: "Springfield / Bolt Action or bow",
               where: "West Elizabeth and the remote forests of New Hanover. Big Valley, Tall Trees and the woods around Strawberry. It attacks, so be quick." },
  wolf:      { name: "Wolf (Gray/Timber Wolf)", size: "Big", weapon: "Springfield / Bolt Action or bow",
               where: "The Gray Wolf lives mainly in Big Valley and Tall Trees North, the Timber Wolf in Cumberland Forest and the Grizzlies (e.g. Cotorra Springs). They hunt in packs, so shoot from a distance." },
  bison:     { name: "Bison (American Bison)", size: "Gigantic", weapon: "Rolling Block / Carcano",
               where: "The plains of New Hanover and West Elizabeth. Herds in the Heartlands east of Valentine and on the Great Plains." },
  boar:      { name: "Boar (Wild Boar)", size: "Big", weapon: "Springfield / Bolt Action or bow",
               where: "New Hanover, Lemoyne and West Elizabeth. Best in Scarlett Meadows and Bluewater Marsh (Lemoyne) and around Lagras." },
  iguana:    { name: "Iguana", size: "Small", weapon: "Varmint Rifle",
               where: "Green Iguana: the largest island in Flat Iron Lake, west of Rhodes. Swim there from the east shore. The Desert Iguana lives on the islets in the San Luis River, but New Austin is only reachable in the epilogue." },
  beaver:    { name: "Beaver", size: "Small", weapon: "Varmint Rifle",
               where: "Owanjila Lake (West Elizabeth) is the best spot, often with several at once. Also along the Kamassa River in Roanoke and at Elysian Pool." },
  rabbit:    { name: "Rabbit", size: "Small", weapon: "Varmint Rifle",
               where: "Common in open grassland: the Heartlands, Great Plains and Big Valley. Also around camp." },
  raccoon:   { name: "Raccoon", size: "Small", weapon: "Varmint Rifle",
               where: "Mostly active at night. Scarlett Meadows, Roanoke Ridge and the woods around Valentine." },
  badger:    { name: "Badger", size: "Small", weapon: "Varmint Rifle",
               where: "Drier areas: Scarlett Meadows, the Heartlands and Big Valley. Look for small burrows in open terrain." },
  squirrel:  { name: "Squirrel", size: "Tiny", weapon: "Bow + Small Game Arrows",
               where: "In forests everywhere, for example around Horseshoe Overlook and in Cumberland Forest. Pearson wants a perfect carcass, so do not skin it." },
  pronghorn: { name: "Pronghorn (American Pronghorn)", size: "Big", weapon: "Springfield / Bolt Action or bow",
               where: "The wide open grasslands of New Hanover and West Elizabeth, such as the Heartlands and the Great Plains. Easily spooked, so approach from downwind. (The Sonoran and Baja species live in New Austin, which is only reachable in the epilogue.)" },
  ox:        { name: "Ox (Angus/Devon Ox)", size: "Gigantic", weapon: "Rolling Block / Carcano",
               where: "Ranches and farms in West Elizabeth, New Hanover and Lemoyne, such as Emerald Ranch and the farms around Valentine and Rhodes. It is livestock, so shoot out of sight of witnesses." },
  snake:     { name: "Snake (various species)", size: "Tiny", weapon: "Bow + Small Game Arrows",
               where: "The swamp around Shady Belle is the best farming spot. Also the swamps of Lemoyne and the shore of Roanoke Ridge (water snakes, cottonmouth). Rattlesnakes and copperheads also live in New Hanover." },
  goat:      { name: "Goat (Alpine Goat)", size: "Big", weapon: "Springfield / Bolt Action or bow",
               where: "Domestic goats on ranches and farms everywhere, including around Emerald Ranch and the farms in Scarlett Meadows. It is livestock, so shoot out of sight of witnesses." },
  alligator: { name: "Alligator", size: "Big / Gigantic", weapon: "Small: Springfield, adult: Rolling Block / Carcano",
               where: "The swamps and river deltas of Lemoyne: southern Bluewater Marsh and around Bayou Nwa and Lagras. A small alligator is easier to kill in one shot. Stay out of the water." },
  ram:       { name: "Bighorn Ram (Rocky Mountain)", size: "Big", weapon: "Springfield / Bolt Action",
               where: "Lives mainly in the Grizzlies (Ambarino), on rocky slopes. Pearson wants the whole carcass, so do not skin it. Make sure the carcass does not tumble down a slope." },
  muskrat:   { name: "Muskrat", size: "Small", weapon: "Varmint Rifle",
               where: "Along rivers and shores in West Elizabeth, Lemoyne and New Hanover, such as the Dakota River, the Kamassa River and the shores of Flat Iron Lake." },
  fox:       { name: "Fox (Red/Gray/Silver Fox)", size: "Medium", weapon: "Bow with regular arrows",
               where: "The forests and grasslands of West Elizabeth, New Hanover and Lemoyne, for example the Heartlands and Scarlett Meadows. The Silver Fox shows up mostly at night." },
  cow:       { name: "Cow (Angus / Florida Cracker)", size: "Gigantic", weapon: "Rolling Block / Carcano",
               where: "Ranches and homesteads everywhere. Emerald Ranch and the pastures around Valentine and Rhodes are the most convenient. It is livestock, so shoot out of sight of witnesses." },
  moose:     { name: "Moose (Western Bull Moose)", size: "Gigantic", weapon: "Rolling Block / Carcano",
               where: "Cairn Lake (Ambarino) is a fixed spawn point, also Roanoke Ridge and remote forests in West Elizabeth. Only the bull moose has antlers." }
};

RDR.animalLabel = a => RDR.ANIMALS[a].name.split(" (")[0];

// Card per species with location and weapon; boxes is the checkbox HTML.
RDR.animalCard = (a, need, boxes) => {
  const an = RDR.ANIMALS[a];
  return `
    <section class="card animal" data-animal="${a}">
      <div>
        <h3>${an.name}</h3>
        <div class="count"><span class="have">0</span> / ${need} needed</div>
        <ul class="checks boxes">${boxes}</ul>
      </div>
      <dl>
        <dt>Where</dt><dd>${an.where}</dd>
        <dt>Weapon</dt><dd><strong>${an.weapon}</strong> <span class="tag">${an.size}</span></dd>
      </dl>
    </section>`;
};

// Updates the counters on the animal cards and hides completed animals if requested.
RDR.refreshAnimalCards = hide => {
  document.querySelectorAll("[data-animal]").forEach(card => {
    const inputs = card.querySelectorAll("input[data-key]");
    const have = [...inputs].filter(i => i.checked).length;
    card.querySelector(".have").textContent = have;
    const done = have === inputs.length;
    card.classList.toggle("done", done);
    card.hidden = hide && done;
  });
};
