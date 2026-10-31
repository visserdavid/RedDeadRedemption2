(() => {
  // Story missions per chapter (GTABase). Tag "Honor" = optional Honor mission, "Special Edition" = not in every version.
  const H = "Honor", SE = "Special Edition";
  const chapters = [
    { id: "ch1", title: "Chapter 1: Colter", items: [
      ["Outlaws from the West"], ["Enter, Pursued by a Memory"], ["The Aftermath of Genesis"], ["Old Friends"],
      ["Who the Hell is Leviticus Cornwall?"], ["Eastward Bound"] ] },
    { id: "ch2", title: "Chapter 2: Horseshoe Overlook", items: [
      ["Polite Society, Valentine Style"], ["Americans at Rest"], ["Who is Not without Sin"], ["Exit Pursued by a Bruised Ego"],
      ["The First Shall Be Last"], ["Paying a Social Call"], ["A Quiet Time"], ["Blessed are the Meek?"],
      ["Good, Honest, Snake Oil", H], ["We Loved Once and True (I, II & III)", H], ["Money Lending and Other Sins - I & II", H],
      ["Money Lending and Other Sins - III"], ["The Spines of America"], ["Pouring Forth Oil - I & II", H], ["A Fisher of Men"],
      ["Pouring Forth Oil - III & IV"], ["An American Pastoral Scene"], ["The Sheep and the Goats"], ["A Strange Kindness"] ] },
    { id: "ch3", title: "Chapter 3: Clemens Point", items: [
      ["The New South"], ["Further Questions of Female Suffrage"], ["Money Lending and Other Sins - IV", H], ["American Distillation"],
      ["The Course of True Love - I & II", H], ["The Course of True Love - III", H], ["Advertising, the New American Art (I & II)"],
      ["Horse Flesh for Dinner"], ["The Fine Joys of Tobacco"], ["Magicians for Sport"], ["Friends in Very Low Places"],
      ["An Honest Mistake"], ["Preaching Forgiveness As He Went"], ["Sodom? Back to Gomorrah"], ["Blessed are the Peacemakers"],
      ["A Short Walk in a Pretty Town"], ["Blood Feuds, Ancient and Modern"], ["The Battle of Shady Belle"] ] },
    { id: "ch4", title: "Chapter 4: Shady Belle", items: [
      ["The Joys of Civilization"], ["Angelo Bronte, a Man of Honor"], ["Money Lending and Other Sins - V", H], ["Help a Brother Out", H],
      ["Brothers and Sisters, One and All", H], ["Fatherhood and Other Dreams (I & II)", H], ["No, No and Thrice, No"], ["The Gilded Cage"],
      ["American Fathers (I & II)"], ["A Fine Night of Debauchery"], ["High and Low Finance", SE], ["Horsemen, Apocalypses"],
      ["Urban Pleasures"], ["Country Pursuits"], ["Revenge is a Dish Best Eaten"], ["Banking, the Old American Art"] ] },
    { id: "ch5", title: "Chapter 5: Guarma", items: [
      ["Welcome to the New World"], ["Savagery Unleashed"], ["A Kind and Benevolent Despot"], ["Hell Hath No Fury"],
      ["Paradise Mercifully Departed"], ["Dear Uncle Tacitus"], ["Fleeting Joy"], ["A Fork in the Road"], ["That's Murfree Country"] ] },
    { id: "ch6", title: "Chapter 6: Beaver Hollow", items: [
      ["Icarus and Friends"], ["Visiting Hours"], ["Just a Social Call"], ["Do Not Seek Absolution - I", H], ["Do Not Seek Absolution - II", H],
      ["Of Men And Angels", H], ["The Course of True Love - IV & V", H], ["Money Lending and Other Sins - VI & VII", H],
      ["The Delights of Van Horn"], ["The Bridge to Nowhere"], ["A Rage Unleashed"], ["Archeology for Beginners", H],
      ["Honor, Amongst Thieves", H], ["The Fine Art of Conversation"], ["Goodbye, Dear Friend"], ["Mrs. Sadie Adler, Widow (I & II)", H],
      ["Favored Sons"], ["The King's Son"], ["My Last Boy"], ["Our Best Selves"], ["Red Dead Redemption"] ] },
    { id: "ep1", title: "Epilogue, Part 1: Pronghorn Ranch", items: [
      ["The Wheel"], ["Simple Pleasures"], ["Farming, for Beginners"], ["Fatherhood, for Beginners"], ["Old Habits"],
      ["Jim Milton Rides, Again?"], ["Fatherhood, for Idiots"], ["Motherhood"], ["Gainful Employment"],
      ["The Landowning Classes / Home of the Gentry?"] ] },
    { id: "ep2", title: "Epilogue, Part 2: Beecher's Hope", items: [
      ["Bare Knuckle Friendships"], ["Home Improvement for Beginners"], ["An Honest Day's Labors"], ["The Tool Box"],
      ["A New Jerusalem"], ["A Quick Favor for an Old Friend"], ["Uncle's Bad Day"], ["Trying Again"], ["A Really Big Bastard"],
      ["A New Future Imagined"], ["American Venom"] ] }
  ];
  const rowsOf = ids => RDR.itemsOf("missions", ...ids);
  const ALL = chapters.map(c => c.id);
  const required = ids => rowsOf(ids).filter(r => !r.tag);
  const doneOf = rs => RDR.ratio(rs.map(r => r.keys.done));
  // One mission by name, for the trophies of single missions.
  const mission = name => () => doneOf(rowsOf(ALL).filter(r => r.name === name));

  RDR.list({
    id: "missions", title: "Story missions", nav: "Missions", order: 115, group: "Missions",
    sub: "Red Dead Redemption 2: all 110 story missions per chapter, with the optional Honor missions and a Gold Medal box for each.",
    blurb: "All 110 story missions per chapter, with the optional Honor missions and Gold Medals.",
    filter: "Hide missions you have completed",
    tips: [
      "Missions tagged <strong>Honor</strong> are optional. For the trophy <em>Lending a Hand</em> you must play all of them in one playthrough. Sources differ slightly on which parts count: GTABase marks <em>Pouring Forth Oil I &amp; II</em> as Honor, PowerPyx instead lists <em>Money Lending and Other Sins III</em>.",
      "<strong>Gold Medals:</strong> the requirements of a mission only appear after you have completed it once. All of them must be met in a single run; you can replay missions from the pause menu under <em>Progress → Story</em>. 70 Gold Medals give the trophy <em>Gold Rush</em>.",
      "<em>High and Low Finance</em> is only in the Special/Ultimate Edition and does not count here for 100%.",
      "Finishing all story missions counts automatically on the <a href=\"#/hundred\">100%</a> page; the chapter trophies count automatically on <a href=\"#/trophies\">Trophies</a>."
    ],
    sources: [
      ["GTABase (all story missions)", "https://www.gtabase.com/red-dead-redemption-2/missions/?lang=en"],
      ["PowerPyx (optional Honor missions)", "https://powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap"],
      ["rdr2.org (Gold Medals, chapter 2)", "https://www.rdr2.org/guides/chapter-2-missions-gold-medals-guide/"],
      ["rdr2.org (Gold Medals, chapter 6)", "https://www.rdr2.org/guides/chapter-6-missions-gold-medals-guide/"]
    ],
    sections: chapters.map(c => ({
      type: "table", id: c.id, title: c.title, fields: ["name", "tag"], rows: c.items,
      checks: [["done", "Done"], ["gold", "Gold"]],
      columns: [["Mission", r => `${r.name}${r.tag ? RDR.tag(r.tag) : ""}`]]
    })),
    metrics: {
      done: () => doneOf(rowsOf(ALL)),
      gold: () => RDR.ratio(rowsOf(ALL).map(r => r.keys.gold)),
      honor: () => doneOf(rowsOf(ALL).filter(r => r.tag === H)),
      // 100%: every mission that is not optional and not edition-bound.
      story: () => ({ have: required(ALL).every(r => RDR.get(r.keys.done)) ? 1 : 0, total: 1 }),
      ch1: () => doneOf(required(["ch1"])), ch2: () => doneOf(required(["ch2"])), ch3: () => doneOf(required(["ch3"])),
      ch4: () => doneOf(required(["ch4"])), ch5: () => doneOf(required(["ch5"])), epilogue: () => doneOf(required(["ep1", "ep2"])),
      enter: mission("Enter, Pursued by a Memory"), goodbye: mission("Goodbye, Dear Friend"),
      redemption: mission("Red Dead Redemption"), jerusalem: mission("A New Jerusalem")
    },
    meters: [["done", "Missions completed"], ["gold", "Gold Medals"], ["honor", "Honor missions"]]
  });
})();
