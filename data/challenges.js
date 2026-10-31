(() => {
  const groups = () => RDR.groupsOf("challenges");
  RDR.list({
    id: "challenges", title: "Challenges", order: 160, group: "Challenges & treasure",
    heading: "Challenges Checklist", sub: "Red Dead Redemption 2 (story mode): all 90 challenges in 9 categories. All 9 categories up to rank 10 are needed for 100%.", blurb: "All 90 challenges in 9 categories, in order.",
    filter: "Hide completed challenges",
    tips: [
    "Within a category you complete the challenges <strong>in order</strong>: what you do for a later rank only counts once the previous rank is done. The next challenge is shown in <strong>bold</strong> below.",
    "Challenges unlock from chapter 2. You can see your progress in the pause menu under <em>Progress → Challenges</em>.",
    "Many ranks give a reward, such as money, XP or a piece of gear (for Explorer the reward is listed)."
  ],
    sources: [
    [
      "rdr2.org (all challenges)",
      "https://www.rdr2.org/wiki/challenges/"
    ],
    [
      "rdr2.org (Explorer treasure maps)",
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
      ["Hold up 5 townsfolk", ""],
      ["Rob 2 coaches or return 2 stolen coaches to a Fence", ""],
      ["Rob the cash register in any 4 shops in 1 day", ""],
      ["Rob 3 coaches or return 3 stolen coaches to a Fence in 1 day", ""],
      ["Amass a $250 bounty in one state", ""],
      ["Steal 5 horses and sell them to the horse fence at Clemens Cove", ""],
      ["Rob $50 worth of cash and valuables from townsfolk and travelers", ""],
      ["Steal 7 wagons and sell them to the Fence at Emerald Ranch", ""],
      ["Hogtie someone and leave them on the railroad tracks 3 times", "The train has to hit the person"],
      ["Complete 5 train robberies without dying or being caught", ""]
    ] },
    { id: "explorer", title: "Explorer", intro: "Earned with the Jack Hall Gang, Poisonous Trail and High Stakes treasures. The route per rank is on <a href=\"#/explorer\">Explorer treasures</a>.", items: [
      ["Find the first treasure map", "Explorer Holster"],
      ["Find the first treasure", "$5 + stamina XP"],
      ["Find the second treasure", "Explorer Bandolier"],
      ["Find the third treasure", "$10 + stamina XP"],
      ["Find the fourth treasure", "$10 + stamina XP"],
      ["Find the fifth treasure", "$15 + stamina XP"],
      ["Find the sixth treasure", "Explorer Gun Belt"],
      ["Find the seventh treasure", "$15 + stamina XP"],
      ["Find the eighth treasure", "$20 + stamina XP"],
      ["Find the ninth treasure", "Explorer Off-Hand Holster"]
    ] },
    { id: "gambler", title: "Gambler", items: [
      ["Win 5 hands of Poker", ""],
      ["In Blackjack, double down and win the hand 5 times", ""],
      ["Win 3 games of Five Finger Fillet", ""],
      ["Bust out the Poker players in Flatneck Station, Saint Denis and Valentine", ""],
      ["Win 3 rounds of Dominoes without drawing any tiles, against 2 or fewer opponents", ""],
      ["Beat the Blackjack dealer in Rhodes and Van Horn", ""],
      ["Beat the Five Finger Fillet player in Strawberry, Valentine and Van Horn", ""],
      ["Win 3 hands of Blackjack in which you hit 3 or more times", ""],
      ["Win 3 games of Dominoes in a row", ""],
      ["Win 3 hands of Poker in a row", ""]
    ] },
    { id: "herbalist", title: "Herbalist", items: [
      ["Pick 6 Yarrow", ""],
      ["Pick and eat 4 species of berry", ""],
      ["Craft 7 items using Sage as an ingredient", ""],
      ["Pick 5 mushrooms and feed them to your horse", ""],
      ["Craft 9 items using Indian Tobacco as an ingredient", ""],
      ["Pick 15 different species of herb", ""],
      ["Craft and use 5 Special Miracle Tonics", ""],
      ["Use Oleander to craft 6 poison weapons", "Poison arrows or poison throwing knives"],
      ["Pick one of each species of herb", "All 30 herbs, four of them in New Austin. See <a href=\"#/plants\">Plants</a>."],
      ["Season and cook all 11 types of meat", ""]
    ] },
    { id: "horseman", title: "Horseman", items: [
      ["Kill 5 rabbits from horseback", ""],
      ["Jump over 3 obstacles in 15 seconds", ""],
      ["Ride from Valentine to Rhodes in less than 5 minutes", ""],
      ["While mounted, drag a victim 3300 feet with your lasso", ""],
      ["Trample 5 animals while on horseback", ""],
      ["Ride from Strawberry to Saint Denis in less than 9 minutes without touching any water", ""],
      ["Kill 7 enemies from horseback without dismounting", ""],
      ["Kill 9 predators from horseback", ""],
      ["Ride from Van Horn to Blackwater in less than 17 minutes without touching any water", ""],
      ["Break every wild horse breed", ""]
    ] },
    { id: "hunter", title: "Master Hunter", items: [
      ["Skin 3 deer", ""],
      ["Collect 3 perfect quality rabbit pelts", ""],
      ["Track 10 different animal species using your binoculars", ""],
      ["Call an animal and get a clean kill 5 times", ""],
      ["Skin 3 black or grizzly bears", ""],
      ["Kill 5 cougars with your bow, then skin them", ""],
      ["Use bait to lure and kill both a herbivore and a predator", ""],
      ["Catch 3 fish without using a fishing rod", ""],
      ["Catch an opossum playing possum", "Approach it, it plays dead, and pick it up"],
      ["Find and kill the legendary panther Giaguaro", "West of Shady Belle"]
    ] },
    { id: "sharp", title: "Sharpshooter", items: [
      ["Kill 3 flying birds", ""],
      ["Kill 2 different species of animal in 1 Dead Eye use", ""],
      ["Kill 5 flying birds while on a moving train", ""],
      ["Kill someone 80 feet away with a tomahawk", ""],
      ["Kill 6 animals without switching or reloading your weapon", ""],
      ["Kill someone at least 660 feet away with a long scoped rifle", ""],
      ["Get 7 headshots in a row", ""],
      ["Disarm 3 enemies without reloading or switching your weapon", ""],
      ["Shoot 3 people's hats off in the same Dead Eye use", ""],
      ["Kill 3 flying birds with 3 consecutive long scoped rifle shots", ""]
    ] },
    { id: "survival", title: "Survivalist", items: [
      ["Catch 3 Bluegill fish", ""],
      ["Hand 5 animals in to camp or to a Trapper", ""],
      ["Kill 5 animals with a Varmint Rifle", ""],
      ["Craft a dynamite, fire, improved, poison and small game arrow", ""],
      ["Catch a fish in the Bayou from a riverboat and while standing on train tracks", ""],
      ["Kill a scavenging animal while it is feeding on a corpse 5 times", ""],
      ["Kill 8 small game animals with consecutive shots using Small Game Arrows", ""],
      ["Craft a homing tomahawk, improved tomahawk, volatile dynamite and volatile fire bottle", ""],
      ["Catch a fish that weighs at least 19 lbs", ""],
      ["Catch one of each type of fish", ""]
    ] },
    { id: "weapons", title: "Weapons Expert", items: [
      ["Kill 3 enemies with a knife", ""],
      ["Kill 3 enemies in 10 seconds using only throwing knives", ""],
      ["Kill 3 birds of prey using only a tomahawk", ""],
      ["Kill 10 enemies with a shotgun using crafted ammo", ""],
      ["Kill 5 mounted enemies, using 1 throwing knife per kill", ""],
      ["Kill 4 enemies with a single stick of dynamite", ""],
      ["Kill 4 consecutive enemies by throwing and retrieving the same tomahawk", ""],
      ["Kill 15 enemies using a long-barreled shotgun", ""],
      ["Kill 9 unaware enemies from behind using the bow", ""],
      ["Kill a grizzly bear without taking damage using only throwing knives", ""]
    ] }
  ],
      status: (g, have) => ({ done: have === g.items.length, text: have === g.items.length ? "✓ rank 10" : `rank ${have}/10` })
    }],
    metrics: {
      done: () => RDR.ratio(groups().flatMap(g => g.keys)),
      categories: () => ({ have: groups().filter(g => RDR.count(g.keys) === g.items.length).length, total: groups().length })
    },
    meters: [["done", "Challenges completed"], ["categories", "Categories complete"]]
  });
})();
