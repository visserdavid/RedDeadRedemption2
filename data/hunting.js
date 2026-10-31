(() => {
  // Ms. Hobbs' hunting requests (rdr2.org, PowerPyx). Every animal must be a perfect, unskinned carcass.
  const requests = [
    ["r1", "Request 1: Valentine", "$50", "Available from the start of chapter 2", [["Squirrel", "Small Game Arrows or Varmint Rifle"], ["Rabbit", "Varmint Rifle"]]],
    ["r2", "Request 2: Strawberry", "$70", "After the reward for request 1", [["Cardinal", "Small Game Arrows or Varmint Rifle"],
      ["Rat", "The cave behind the Elysian Pool waterfall; bring a lantern"], ["Woodpecker", "Small Game Arrows or Varmint Rifle"]]],
    ["r3", "Request 3: Rhodes", "$100", "After the reward for request 2", [["Chipmunk", "Small Game Arrows or Varmint Rifle"],
      ["Opossum", "Varmint Rifle; only in a few spots"], ["Oriole", "Small Game Arrows or Varmint Rifle"], ["Robin", "Small Game Arrows or Varmint Rifle"]]],
    ["r4", "Request 4: Saint Denis", "$120", "After the reward for request 3", [["Songbird", "Small Game Arrows or Varmint Rifle"],
      ["Sparrow", "Small Game Arrows or Varmint Rifle"], ["Toad", "Near water"], ["Bullfrog", "Near water"], ["Skunk", "Varmint Rifle"]]],
    ["r5", "Request 5: Van Horn Trading Post", "$150 + Ms. Hobbs' letter", "Epilogue, after requests 1–4", [["Cedar Waxwing", "Small Game Arrows or Varmint Rifle"],
      ["Bat", "In caves, such as the Elysian Pool cave"], ["Bluejay", "Small Game Arrows or Varmint Rifle"], ["Crow", "Small Game Arrows or Varmint Rifle"],
      ["Beaver", "Varmint Rifle; near rivers and lakes"]]]
  ];
  const groups = () => RDR.groupsOf("hunting").filter(g => g.id !== "statue");
  RDR.list({
    id: "hunting", title: "Hunting requests", nav: "Hunting", order: 35, group: "Hunting & camp",
    sub: "Red Dead Redemption 2 (story mode): Ms. Hobbs' five hunting requests and the Squirrel Statue.",
    blurb: "Ms. Hobbs' five hunting requests, from Valentine to Van Horn. All five are needed for 100%.",
    filter: "Hide animals you have already sent",
    tips: [
      "Take a <strong>hunting request poster</strong> at the post office in Valentine, Strawberry, Rhodes, Saint Denis or Van Horn. One poster is enough; the next requests follow on their own.",
      "Every animal must be a <strong>perfect carcass</strong>: do not skin it. Mail the carcasses from a post office, then collect the reward at a post office after 24 hours; the next request then starts.",
      "Hunt animals that rot quickly (opossum, beaver) last. Carrying perfect carcasses for a later request can block progress.",
      "Request 5 needs the epilogue. Finishing all five counts automatically on the <a href=\"#/hundred\">100%</a> page; the Squirrel Statue gives the trophy <em>It's Art</em> on <a href=\"#/trophies\">Trophies</a>."
    ],
    sources: [
      ["rdr2.org (hunting requests)", "https://rdr2.org/guides/hunting-request-guide"],
      ["PowerPyx (animal locations)", "https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/"]
    ],
    sections: [
      { type: "checklist", grid: true, groups: requests.map(([id, title, reward, when, animals]) =>
        ({ id, title, reward, meta: when, items: animals, finish: "Mailed to Ms. Hobbs" })) },
      { type: "checklist", title: "The Squirrel Statue", groups: [{ id: "statue", title: "It's Art",
        intro: "After request 5, Ms. Hobbs mails you an invitation and gives you the statue. It keeps getting stolen from Beecher's Hope.",
        items: [["Received the Squirrel Statue from Ms. Hobbs"], ["Placed it above the fireplace at Beecher's Hope"],
          ["Recovered the stolen statue 6 times", "Trophy: It's Art"]] }] }
    ],
    metrics: {
      delivered: () => RDR.ratio(groups().map(g => g.finishKey)),
      all: () => ({ have: groups().every(g => RDR.get(g.finishKey)) ? 1 : 0, total: 1 }),
      art: () => RDR.ratio(RDR.keysOf("hunting", "statue").slice(-1))
    },
    meters: [["delivered", "Requests delivered"]]
  });
})();
