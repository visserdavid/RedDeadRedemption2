(() => {
  // Homestead stashes (PowerPyx): [id, name, how to get the stash, timing or warning].
  const homesteads = [
    ["chezporter", "Chez Porter", "Upstairs in the barn: climb the ladder to the stash box beside the haystacks (2 × $50 and a jewelry bag).",
      "Part of Javier's home robbery in chapter 2 or 3; unclear whether going later without him counts."],
    ["aberdeen", "Aberdeen Pig Farm", "Greet the man on the porch and follow him inside. Rob the house, then take the lockbox through the door on the south side.",
      "The south door stays locked until you have followed him inside."],
    ["lonnie", "Lonnie's Shack", "Kill three of the four men and keep the last one alive. Threaten him to learn where the stash is (for example under a pillow or in a grain sack).",
      "Save first: without interrogating the survivor you cannot get the stash."],
    ["vanhorn", "Van Horn Mansion", "The villa just south of Van Horn Trading Post. Take the money from the table downstairs and loot the rest of the house.",
      "The two residents only show up at random times and sleep downstairs at night."],
    ["catfish", "Catfish Jackson's", "Threaten the son to learn the location: the living-room chimney or a crate in a hole beside the house.",
      "Only counts after you have interrogated the son."],
    ["watson", "Watson's Cabin", "Northwest of Wallace Station. Climb down the ladder at the back into the cellar and take the old lady's shotgun.",
      "Optional: a day later, fight her four sons for a lockbox of about $73."],
    ["willard", "Willard's Rest", "North of Annesburg. Teach the resident to hunt, return two days later for a shooting contest, eat dinner with her and loot the lockbox by the bed.",
      "Only from the first story mission of chapter 6."]
  ];
  RDR.list({
    id: "homesteads", title: "Homestead stashes", nav: "Homesteads", order: 108, group: "The world",
    sub: "Red Dead Redemption 2 (story mode): the 7 homesteads with a hidden stash. Four give the trophy Breaking and Entering.",
    blurb: "The 7 homesteads with a hidden stash. Four are needed for the trophy Breaking and Entering.",
    filter: "Hide stashes you have found",
    tips: [
      "Rob <strong>4</strong> homesteads for the trophy <em>Breaking and Entering</em> (see <a href=\"#/trophies\">Trophies</a>). Do it early: some residents leave or die later in the story.",
      "Loot <strong>everything</strong> in the house. Several players found that taking only the stash did not register the homestead.",
      "A home robbery also counts as one of the four kinds of robbery on the <a href=\"#/hundred\">100%</a> page."
    ],
    sources: [
      ["PowerPyx (homestead stashes)", "https://powerpyx.com/red-dead-redemption-2-homestead-stash-locations"],
      ["GosuNoob (homestead stashes)", "https://www.gosunoob.com/red-dead-redemption-2/homestead-stash-locations-breaking-entering-trophy/"]
    ],
    sections: [{ type: "cards", id: "stashes", checkLabel: "<strong>Stash found</strong>",
      items: homesteads.map(([id, name, how, note]) => ({ id, name, desc: how, note })) }],
    metrics: { found: () => RDR.ratio(RDR.keysOf("homesteads", "stashes")) },
    meters: [["found", "Stashes found"]]
  });
})();
