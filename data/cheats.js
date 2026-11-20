// Story-mode cheat codes. Phrases, effects and newspaper requirements follow rdr2.org (updated August 2026);
// where GameRant or RankedBoost name a different paper or mission, that is noted in the row.
(() => {
  const ALWAYS = "Always available";
  // A newspaper requirement: the paper (with issue), when it comes out, and optionally what other guides say.
  const paper = (name, when, other) => `${RDR.tag("Newspaper")} <em>${name}</em>, ${when}` +
    (other ? `<span class="where">${other}</span>` : "");
  const GAZETTE_27 = paper("New Hanover Gazette No. 27", "sold in Valentine during chapter 1");

  // [id, phrase (exact, punctuation matters), effect, how to unlock]
  const groups = [
    { id: "money", title: "Money & honor", rows: [
      ["money", "Greed is now a virtue", "Gives you $500, every time you activate it.", ALWAYS],
      ["honor-up", "Virtue unearned is not virtue", "Sets your honor to the highest level.",
        paper("Blackwater Ledger No. 67", "after <em>Urban Pleasures</em> (chapter 4)", "GameRant names the Saint Denis Times No. 48.")],
      ["honor-neutral", "Balance. All is balance", "Resets your honor to neutral.", ALWAYS],
      ["honor-down", "You revel in your disgrace, I see", "Sets your honor to the lowest level.", GAZETTE_27 +
        "<span class=\"where\">GameRant lists no requirement.</span>"]
    ] },
    { id: "wanted", title: "Wanted level", rows: [
      ["wanted-up", "You want punishment", "Raises your wanted level.", ALWAYS],
      ["wanted-down", "You want freedom", "Lowers your wanted level.", ALWAYS],
      ["bounties", "You want everyone to go away", "Removes all bounties and lockdown areas.", ALWAYS]
    ] },
    { id: "cores", title: "Health, stamina & Dead Eye", rows: [
      ["deadeye-1", "Guide me better", "Puts Dead Eye back to level 1 (targets are marked automatically).", ALWAYS],
      ["deadeye-2", "Make me better", "Unlocks Dead Eye level 2 (mark targets yourself).", ALWAYS],
      ["deadeye-3", "I shall be better", "Unlocks Dead Eye level 3 (stay in Dead Eye after shooting).", ALWAYS],
      ["deadeye-4", "I still seek more", "Unlocks Dead Eye level 4 (shows fatal spots on the head and heart).", ALWAYS],
      ["deadeye-5", "I seek and I find", "Unlocks Dead Eye level 5 (shows all fatal and critical spots).", ALWAYS],
      ["deadeye-infinite", "Be greedy only for foresight", "Infinite Dead Eye.", ALWAYS],
      ["refill", "You flourish before you die", "Refills your Health, Stamina and Dead Eye bars at once.", ALWAYS],
      ["fortify", "You seek more than the world offers", "Refills and fortifies your bars, so they do not drain for a while.",
        paper("New Hanover Gazette No. 36", "after <em>The King's Son</em> (chapter 6)", "RankedBoost names issue No. 35.")],
      ["levels", "Seek all the bounty of this place", "Raises the level of your Health, Stamina and Dead Eye bars.", ALWAYS],
      ["stamina", "The lucky be strong evermore", "Infinite stamina for you and your horse.",
        paper("Blackwater Ledger No. 68", "after <em>Dear Uncle Tacitus</em> (chapter 5)", "GameRant names the Saint Denis Times No. 49.")]
    ] },
    { id: "weapons", title: "Weapons & ammo", rows: [
      ["ammo", "Abundance is the dullest desire", "Infinite ammo.", GAZETTE_27],
      ["simple", "A simple life, a beautiful death", "Gives you the Cattleman Revolver, Lancaster Repeater and Springfield Rifle.",
        GAZETTE_27 + "<span class=\"where\">GameRant lists no requirement.</span>"],
      ["heavy", "Greed is American virtue", "Gives you the Pump-Action Shotgun, Bolt-Action Rifle, Mauser Pistol and Semi-Automatic Pistol.",
        paper("Saint Denis Times No. 46 or Blackwater Ledger No. 65", "after <em>Advertising, the New American Art</em> (chapter 3)",
          "GameRant and RankedBoost's newspaper list say after <em>Magicians for Sport</em>.")],
      ["gunslinger", "History is written by fools", "Gives you the Schofield Revolver, Double-Action Revolver, Double-Barreled Shotgun and the off-hand holster.", ALWAYS],
      ["stealth", "Death is silence", "Gives you the Bow, Fire Bottles, Tomahawks, Throwing Knives and a Machete.",
        GAZETTE_27 + "<span class=\"where\">GameRant lists no requirement.</span>"]
    ] },
    { id: "horses", title: "Horses & wagons", rows: [
      ["bonding", "My kingdom is a horse", "Raises your bond with all horses.", ALWAYS],
      ["call-horse", "Better than my dog", "Your horse hears your whistle from anywhere on the map.", ALWAYS],
      ["race-horse", "Run! Run! Run!", "Spawns a race horse.", ALWAYS],
      ["superior-horse", "You want more than you have", "Spawns a Rose Grey Bay Arabian.", ALWAYS],
      ["war-horse", "You are a beast built for war", "Spawns a war horse.",
        paper("Blackwater Ledger No. 72", "in epilogue part 1", "RankedBoost says after <em>The Wheel</em>.")],
      ["random-horse", "You want something new", "Spawns a random horse (breed and coat).", ALWAYS],
      ["wagon", "Keep your dreams simple", "Spawns a wagon with one horse.",
        ALWAYS + "<span class=\"where\">The phrase is also written in the world, on the frozen lake near Flaco Hernandez's camp (GG Recon).</span>"],
      ["buggy", "Keep your dreams light", "Spawns a horse and cart (buggy).", ALWAYS],
      ["stagecoach", "The best of the old ways", "Spawns a stagecoach.", ALWAYS],
      ["circus", "Would you be happier as a clown?", "Spawns a circus wagon.",
        paper("Blackwater Ledger No. 73", "in epilogue part 2", "RankedBoost says after <em>The Landowning Classes</em>.")]
    ] },
    { id: "other", title: "Map, camp & other", rows: [
      ["map", "You long for sight and see nothing", "Reveals the whole map.",
        paper("Blackwater Ledger No. 66 or New Hanover Gazette No. 31", "after <em>Blood Feuds, Ancient and Modern</em> (chapter 3)",
          "GameRant and RankedBoost say after <em>The Joys of Civilization</em> (chapter 4).")],
      ["recipes", "Eat of knowledge", "Teaches you every crafting recipe. You still need the ingredients and a campfire.", ALWAYS],
      ["outfits", "Vanity. All is vanity", "Gives you every outfit in Arthur's wardrobe.", ALWAYS],
      ["camp", "Share", "Gives every camp ledger upgrade and raises the camp supply levels to the maximum.", ALWAYS],
      ["drunk", "A fool on command", "Makes Arthur drunk at once.", ALWAYS]
    ] }
  ];
  const GUIDE = ["rdr2.org (all 37 cheats)", "https://www.rdr2.org/guides/red-dead-redemption-2-cheats/"];
  const NEWSPAPERS = ["RankedBoost (newspaper issues)", "https://rankedboost.com/red-dead-redemption-2/newspapers/"];
  const keys = () => groups.flatMap(g => RDR.keysOf("cheats", g.id));

  RDR.list({
    id: "cheats", title: "Cheat codes", nav: "Cheats", order: 230, group: "Completion",
    sub: "Red Dead Redemption 2 (story mode): all 37 cheat codes, what they do and where you unlock them.",
    blurb: "All 37 story-mode cheats: the exact phrase, the effect and which newspaper unlocks it. Read the warnings first.",
    filter: "Hide cheats you have entered",
    tips: [
      "<strong>Entering a cheat:</strong> pause the game and open <em>Settings</em>, then the Cheats menu. Press Triangle (PlayStation), Y (Xbox) or Enter (PC) and type the phrase. <strong>Punctuation matters, capitals do not.</strong>",
      "An entered cheat stays in the Cheats menu, where you switch it on and off. Tick it here once you have entered it.",
      "<strong>26 cheats</strong> work at any time. <strong>11</strong> only work once you have bought a certain newspaper, which comes out after a certain mission. Newspapers are sold in Valentine, Annesburg, Rhodes, Strawberry and Blackwater. Without that paper the game tells you that you do not meet the requirement.",
      "The guides disagree about some of the papers and missions. Below we follow rdr2.org; where another guide says something else, it is shown under the requirement.",
      "There are also hints in the world: according to SegmentNext there is a cheat code in a locked drawer in the <a href=\"#/shacks\">Snowfield shack</a> (the guide does not say which one), and according to GG Recon <em>Keep your dreams simple</em> is written on the frozen lake near Flaco Hernandez's camp. You do not need to find them: those codes are always available."
    ],
    sources: [
      GUIDE,
      ["GameRant (cheats and newspapers)", "https://gamerant.com/how-to-activate-all-red-dead-redemption-2-cheats-rdr2-infinite-ammo-all-weapons-spawn-horses/"],
      ["RankedBoost (cheats)", "https://rankedboost.com/red-dead-redemption-2/cheats/"],
      NEWSPAPERS,
      ["PCGamesN (saving)", "https://www.pcgamesn.com/red-dead-redemption-2/rdr2-cheats-pc"],
      ["ScreenRant (turning cheats off)", "https://screenrant.com/red-dead-redemption-2-all-cheats/"],
      ["GG Recon (phrase in the world)", "https://www.ggrecon.com/articles/red-dead-redemption-2-cheat-code-found-in-game/"],
      ["SegmentNext (Snowfield shack)", "https://segmentnext.com/red-dead-redemption-2-shacks-locations-guide/"]
    ],
    sections: [
      { type: "html", title: "Watch out", html: "<div class=\"card\"> <ul class=\"tips\">" +
        " <li><strong>No saving.</strong> As soon as you activate a cheat, you can no longer save (rdr2.org, PCGamesN). <strong>Save first.</strong> According to ScreenRant you can save again once you switch all cheats off, but your game goes back to your last save from before you cheated.</li>" +
        " <li><strong>No trophies or achievements</strong> while a cheat is active. See <a href=\"#/trophies\">Trophies</a>.</li>" +
        " <li><strong>Keeping a code without using it:</strong> enter it, do <em>not</em> activate it, and save right away. Then it stays in the menu for later (rdr2.org).</li>" +
        " <li><strong>100% and challenges:</strong> the guides do not say whether cheats affect them. To be safe, do not cheat on a save you still want to complete.</li>" +
        " </ul> </div>" },
      ...groups.map(g => ({
        type: "table", id: g.id, title: g.title, fields: ["id", "name", "effect", "unlock"], rows: g.rows,
        src: g.rows.some(r => r[3] !== ALWAYS && r[3].includes("Newspaper")) ? [GUIDE, NEWSPAPERS] : GUIDE,
        columns: [["Phrase", r => `<span class="phrase">${r.name}</span>`], ["Effect", r => r.effect, "small"],
          ["Where to unlock", r => r.unlock, "small"]]
      }))
    ],
    metrics: { entered: () => RDR.ratio(keys()) },
    meters: [["entered", "Cheats entered"]]
  });
})();
