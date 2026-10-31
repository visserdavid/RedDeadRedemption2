(() => {
  const chapters = [
    { id: "c2", title: "Chapter 2", items: [
      { id: "noblest",  name: "The Noblest of Men, and a Woman", who: "Theodore Levin", where: "Saloon in Valentine", counts: true,
        note: "Duels with four legendary gunslingers. Pick up the unique weapon after each duel, or it is gone.", link: ["#/weapons", "Weapons"] },
      { id: "glitters", name: "All That Glitters", who: "Maximo Cristobal Valdespino", where: "West of Flatneck Station", counts: false,
        note: "Sells you the Jack Hall Gang treasure map.", link: ["#/treasure", "Treasure maps"] },
      { id: "grease",   name: "The Smell of the Grease Paint", where: "Near the Van Horn Trading Post", counts: true },
      { id: "arcadia",  name: "Arcadia for Amateurs", who: "Evelyn Miller", where: "Southeast of Strawberry", counts: true },
      { id: "fundraiser", name: "Fundraiser", where: "Saint Denis", counts: false,
        note: "<strong>Missable:</strong> only available up to and including chapter 6." },
      { id: "dreams",   name: "American Dreams", where: "Starts at one of the crime scenes (among others near Valentine)", counts: true,
        note: "Investigate three crime scenes and find the serial killer." },
      { id: "night",    name: "A Fine Night For It", where: "At night on the road near Lagras (Bayou Nwa)", counts: true },
      { id: "geology",  name: "Geology for Beginners", who: "Francis Sinclair", where: "Northwest of Strawberry", counts: true,
        note: "The 10 rock carvings.", link: ["#/collectibles", "Collectibles"] },
      { id: "faith",    name: "A Test of Faith", who: "Deborah MacGuiness", where: "Northeast of Flatneck Station", counts: true,
        note: "The 30 dinosaur bones. Can only be fully completed in the epilogue.", link: ["#/collectibles", "Collectibles"] },
      { id: "smoking",  name: "Smoking and Other Hobbies", who: "Phineas T. Ramsbottom", where: "Flatneck Station", counts: true,
        note: "The 144 cigarette cards.", link: ["#/cigcards", "Cigarette cards"] }
    ] },
    { id: "c3", title: "Chapter 3", items: [
      { id: "british",  name: "He's British, of Course", who: "Margaret", where: "South of Emerald Ranch", counts: true,
        note: "Catch escaped circus animals. Reward: the Lion's Paw.", link: ["#/trinkets", "Trinkets"] },
      { id: "fisher",   name: "A Fisher of Fish", who: "Jeremy Gill", where: "Flat Iron Lake", counts: true,
        note: "The 13 legendary fish.", link: ["#/fish", "Fish"] },
      { id: "iniquities", name: "The Iniquities of History", who: "Jeremiah Compson", where: "Rhodes, by the station", counts: true },
      { id: "gooddeed", name: "No Good Deed", where: "Rhodes", counts: true }
    ] },
    { id: "c4", title: "Chapter 4", items: [
      { id: "brother",  name: "Oh, Brother", who: "Proetus and Acrisius", where: "Valentine", counts: true },
      { id: "bouncing", name: "A Bright Bouncing Boy", who: "Marko Dragic", where: "Saint Denis", counts: true,
        note: "Reward: the Electric Lantern." },
      { id: "mercies",  name: "The Mercies of Knowledge", where: "Saint Denis", counts: true },
      { id: "artist",   name: "The Artist's Way", who: "Charles Châtenay", where: "Saint Denis", counts: true },
      { id: "ties",     name: "The Ties That Bind Us", where: "Rhodes", counts: true },
      { id: "helpbro",  name: "Help a Brother Out", who: "Brother Dorkins", where: "Saint Denis", counts: false,
        note: "<strong>Missable:</strong> optional honor mission, only in chapter 4." },
      { id: "duchesses", name: "Duchesses and Other Animals", who: "Algernon Wasp", where: "North of Saint Denis", counts: true,
        note: "The exotics. Reward: Algernon's Revolver.", link: ["#/exotics", "Exotics"] },
      { id: "idealism", name: "Idealism and Pragmatism for Beginners", where: "Saint Denis", counts: true }
    ] },
    { id: "c5", title: "Chapter 5", items: [
      { id: "elders",   name: "The Wisdom of the Elders", where: "West of Van Horn", counts: true },
      { id: "widow",    name: "The Widow of Willard's Rest", who: "Charlotte Balfour", where: "Willard's Rest, north of Annesburg", counts: false,
        note: "<strong>Missable:</strong> only available up to and including chapter 6." }
    ] },
    { id: "c6", title: "Chapter 6", items: [
      { id: "veteran",  name: "The Veteran", who: "Hamish Sinclair", where: "O'Creagh's Run", counts: true,
        note: "Reward: Buell, the Cremello Gold Dutch Warmblood.", link: ["#/horses", "Horses"] }
    ] },
    { id: "ep", title: "Epilogue", items: [
      { id: "inferno",  name: "The American Inferno, Burnt Out", where: "West of Blackwater", counts: true }
    ] }
  ];
  const items = () => RDR.groupsOf("strangers").flatMap(g => g.items);
  const MISSABLE = ["fundraiser", "helpbro", "widow"];
  RDR.list({
    id: "strangers", title: "Stranger missions", nav: "Strangers", order: 120, group: "Missions",
    heading: "Stranger Missions Checklist", sub: "Red Dead Redemption 2 (story mode): every <em>Strangers</em> mission strand, by the chapter in which it unlocks.", blurb: "All 26 stranger mission strands (question-mark icons on the map). 10 completed strands are needed for 100%.",
    filter: "Hide completed strands",
    tips: [
    "Strangers appear as a white <strong>question mark</strong> on the map. Some only appear when you are close. A strand often has several parts, sometimes with a few in-game days in between.",
    "For 100% you need <strong>10 completed strands</strong>, and only strands tagged <em>100%</em> count. That count goes automatically to the <a href=\"#/hundred\">100%</a> page.",
    "You can see your progress in the game under <em>Progress → Total Completion → Strangers</em>.",
    "Almost every strand can still be finished after the story. There are three exceptions, listed below under <em>Watch out: missable</em>."
  ],
    sources: [
    [
      "PowerPyx (all strands)",
      "https://www.powerpyx.com/red-dead-redemption-2-stranger-missions-walkthrough/"
    ],
    [
      "PowerPyx (start locations)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-stranger-locations-map/"
    ],
    [
      "SegmentNext (characters and rewards)",
      "https://segmentnext.com/red-dead-redemption-2-stranger-missions-guide/"
    ],
    [
      "Push Square (100%)",
      "https://www.pushsquare.com/guides/red-dead-redemption-2-how-to-complete-10-stranger-mission-strands"
    ]
  ],
    sections: [
      { type: "html", title: "Watch out: missable", html: "<div class=\"card\"> <ul class=\"tips\"> <li><strong>Fundraiser</strong> and <strong>The Widow of Willard's Rest</strong> are only available up to and including chapter 6.</li> <li><strong>Help a Brother Out</strong> can only be done in chapter 4.</li> <li>These three do not count for 100%. If you miss them, you only miss the story.</li> </ul> </div>" },
      { type: "checklist", columns: true, groups: chapters.map(c => ({ ...c, items: c.items.map(s => ({
        id: s.id, name: s.name, strong: true, counts: s.counts,
        tag: s.counts ? "100%" : "does not count",
        where: `${s.who ? `${s.who} · ` : ""}${s.where}`,
        note: s.note,
        link: s.link && [s.link[0], `Checklist: ${s.link[1]}`]
      })) })) }
    ],
    metrics: {
      done: () => RDR.ratio(items().map(i => i.key)),
      counted: () => RDR.capped(RDR.ratio(items().filter(i => i.counts).map(i => i.key)), 10),
      missable: () => RDR.ratio(items().filter(i => MISSABLE.includes(i.id)).map(i => i.key))
    },
    meters: [["done", "Strands completed"], ["counted", "Counting for 100% (10 needed)"], ["missable", "Missables done"]]
  });
})();
