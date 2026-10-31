(() => {
  const groups = () => RDR.groupsOf("cigcards");
  // A set that has been sent in counts as complete, even if its cards were never checked off.
  const cards = g => (RDR.get(g.finishKey) ? g.items.length : RDR.count(g.keys));
  RDR.list({
    id: "cigcards", title: "Cigarette cards", nav: "Cigarette cards", order: 170, group: "Challenges & treasure",
    heading: "Cigarette Cards Checklist", sub: "Red Dead Redemption 2 (story mode): all 144 cigarette cards in 12 sets, for Phineas T. Ramsbottom.", blurb: "All 144 cigarette cards in 12 sets, for Phineas T. Ramsbottom.",
    filter: "Hide cards you already have",
    tips: [
    "You find cards at fixed spots in the world (the spot is listed under each card) or in <strong>packs of cigarettes</strong> from the store. Every pack you open contains a card.",
    "Send a complete set to Phineas T. Ramsbottom from a <strong>post office</strong>. You get a reward for each set. For the first set you also get the <strong>Vintage Civil War Handcuffs</strong> (for the Alligator Tooth Talisman).",
    "Sent in all 12 sets? Then you get an extra reward of $200.",
    "The cards in New Austin (including at Armadillo, Tumbleweed and Fort Brennand) are for the epilogue, or you buy them in packs."
  ],
    sources: [
    [
      "gamers.wiki (all 144 cards)",
      "https://gamers.wiki/en/games/red-dead-redemption-2/guides/rdr2-cigarette-cards-all-144-locations-and-set-rewards"
    ],
    [
      "rdr2.org (sets and rewards)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-all-cigarette-cards-location-guide/"
    ],
    [
      "GamesRadar (locations by region)",
      "https://www.gamesradar.com/red-dead-redemption-2-cigarette-card-locations/"
    ],
    [
      "Red Dead Wiki",
      "https://reddead.fandom.com/wiki/Cigarette_Cards"
    ]
  ],
    sections: [{
      type: "checklist", grid: true,
      groups: [
    { id: "inventions", title: "Amazing Inventions", reward: "Volatile Dynamite + $100", items: [
      ["Steam Locomotive", ""], ["Camera", ""], ["Electrical Execution Apparatus", ""], ["Typewriter", ""],
      ["Revolver", ""], ["Telegraph", ""], ["Manned Glider", ""], ["Dynamite", ""],
      ["Cylinder Phonograph", ""], ["Player Piano", ""], ["Electric Light Bulb", ""], ["Fountain Pen", ""] ] },
    { id: "artists", title: "Artists, Writers & Poets", reward: "Ginseng Elixir + $100", items: [
      ["Edith Corinne", "Braithwaite Manor"], ["Elsie Rose", "Hotel in Strawberry"], ["W. G. Hoyt", "Hani's Bethel"],
      ["Aldous Bramley", "Blackwater"], ["Preston T. Stephenson", "Office in Annesburg"], ["Evelyn Miller", "Blackwater"],
      ["Slick Hutton", "Van Horn Mansion"], ["Laurence Carson", "Alley in Saint Denis"], ["Miss Maud Delancey", "Houseboat in Bluewater Marsh"],
      ["Charles Châtenay", "Chadwick Farm"], ["George Dixie", "Guthrie Farm"], ["Richard McCullough", "Gazebo in Saint Denis"] ] },
    { id: "horses", title: "Breeds of Horses", reward: "Special Horse Medicine + $50", items: [
      ["American Paint", "Cotton mill near Braithwaite"], ["Appaloosa", "Saint Denis docks"], ["Andalusian", "East of the Strawberry stable"],
      ["American Standardbred", "On a table in a child's bedroom"], ["Nokota", "Rhodes stable"], ["Ardennes", "Wallace Station"],
      ["Dutch Warmblood", "House west of Caliban's Seat"], ["Turkoman", "Cabin at O'Creagh's Run"], ["Hungarian Halfbred", "Blacksmith in Armadillo"],
      ["Mustang", "Barn southwest of Valentine"], ["Thoroughbred", "By the wagons in Rhodes"], ["Missouri Fox Trotter", "House near Braithwaite"] ] },
    { id: "gunslingers", title: "Famous Gunslingers", reward: "Special Snake Oil + $50", items: [
      ["Frank Heck", "Valentine cemetery"], ["Otis Miller Boys", "Cumberland Forest"], ["Jack Hall Gang", "Chez Porter"],
      ["Butcher Brothers", "Around Butcher Creek"], ["Flaco Hernández", "Roof of the bank in Rhodes"], ["Slim Grant", "Fairvale Shanty"],
      ["Landon Ricketts", "Armadillo"], ["Black Belle", "Blackwater pier"], ["Billy Midnight", "Windmill in Tumbleweed"],
      ["Emmet Granger", "Canebreak Manor / Fort Wallace"], ["Jim 'Boy' Calloway", "Saint Denis cemetery"], ["Bart Love", "Hanging Dog Ranch"] ] },
    { id: "fauna", title: "Fauna of North America", reward: "Perfect rabbit pelt + $50", items: [
      ["Black Widow Spider", "Cabin in northern West Elizabeth"], ["Bloodhound", "Ruin in Lemoyne"], ["Blue Jay", "Tree platform in New Hanover"],
      ["Catfish", "Saint Denis docks"], ["Coral Snake", "Shack in Lakay"], ["Grouper", "Boat on the Kamassa River"],
      ["Large Mouth Bass", "Cabin at Flat Iron Lake"], ["Panther", "Abandoned village near Van Horn"], ["Parrot", "Pier in Lemoyne"],
      ["Pheasant", "Tree platform in New Hanover"], ["Snapping Turtle", "House in Cumberland Forest"], ["Turkey", "Sheriff's office in Van Horn"] ] },
    { id: "flora", title: "Flora of North America", reward: "Special Miracle Tonic + $50", items: [
      ["Golden Currant", "Shack in Lakay"], ["Hummingbird Sage", "House south of Butcher Creek"], ["Oleander Sage", "Overgrown railing in Saint Denis"],
      ["Yarrow", "Shack in Lakay"], ["Indian Tobacco", "Around Lakay"], ["Black Mangrove", "Emerald Station"],
      ["Longleaf Pine", "Annesburg mine"], ["Desert Fan Palm", "House in Tumbleweed"], ["Coastal Redwood", "House near Strawberry"],
      ["Horse Crippler Cactus", "Caliga Hall"], ["Blazing Star", "Vetter's Echo"], ["Carolina Lupine", "Sheriff's office in Tumbleweed"] ] },
    { id: "gems", title: "Gems of Beauty", reward: "Platinum Chain Necklace + $100", items: [
      ["Leila Stetson", "House in New Hanover"], ["Isabelle Barlow", "Trading post in Roanoke Valley"], ["Hattie Langtry", "Cabin south of Isabelle Barlow"],
      ["Isabelle Standish", "Annesburg mine"], ["Maud Engel", "Heartland Oil Fields"], ["Sadie Russell", "Chicken coop south of Blackwater"],
      ["Geraldine Emerson", "Barn in West Elizabeth"], ["Agnès Guyon", "Cabin in Grizzlies West"], ["Jennie Willetts", "Van Horn"],
      ["Ilga Ulmer", "Alley in Saint Denis"], ["Fay Delaro", "Auction barn in Valentine"], ["Pauline Henderson", "Bacchus Station"] ] },
    { id: "travel", title: "Marvels of Travel", reward: "Aged Pirate Rum + $50", items: [
      ["Packet Ship", "Annesburg docks"], ["Schooner", "Van Horn pier"], ["Camel Caravan", "Rhodes"],
      ["Elephant Carriage", "Strawberry"], ["Goat Carriage", "Emerald Ranch"], ["Hot Air Balloon", "Saloon in Saint Denis"],
      ["U.S. Frigate", "Boathouse in Saint Denis"], ["The Showboat", "Harbormaster's house in Saint Denis"], ["Balener Whaling Vessel", "Ticket booth in Saint Denis"],
      ["Stagecoach", "Riggs Station"], ["Steam Locomotive", "Ruin near Clemens Point"], ["Velocipede", "Green building in Saint Denis"] ] },
    { id: "americans", title: "Prominent Americans", reward: "3 eagle feathers + $50", items: [
      ["President Fisher", "Warehouse in Jansen Mills"], ["President Hardin", "Lagras"], ["Lillian Powell", "Barn in Lemoyne"],
      ["Leviticus Cornwall", "Around Valentine"], ["J. D. McKnight", "Gazebo in Rhodes"], ["Luther Covington", "Warehouse in Saint Denis"],
      ["Harvey Griggs", "Saint Denis station"], ["Henrietta Beatrice Woods", "Red wooden house in Saint Denis"], ["General Quincy Harris", "Heartland Oil Fields"],
      ["General Cornelius Palmer", "Farm near Mattock Pond"], ["Senator Thaddeus Waxman", "House with bunk beds"], ["President Alfred Macalister", "Shack in Saint Denis"] ] },
    { id: "stage", title: "Stars of the Stage", reward: "Small Jewelry Bag + $50", items: [
      ["Laurence Dunn", "Farm in Southfield Flats"], ["Louis Durand", "Abandoned house west of Van Horn"], ["Jesse Raymond", "Burned-down house in Tumbleweed"],
      ["Augusta Tremlow", "Hanging Dog Ranch"], ["Mabel Potter", "Théâtre Râleur (Saint Denis)"], ["Robin Koninsky", "Théâtre Râleur, after five shows"],
      ["Isadore Reid", "Traveling show in Valentine"], ["Irene Grubb", "Around MacFarlane's Ranch"], ["Nettie Palmer", "Show in Valentine"],
      ["Jim Cobb", "Southfield Flats"], ["Mittie Comstock", "Around Larned Sod"], ["Robert Elliot Patchen", "Abandoned house in Lemoyne"] ] },
    { id: "vistas", title: "Vistas of America", reward: "Gold Nugget + $100", items: [
      ["New York", "Caliga Hall"], ["Saint Denis", "By the Saint Denis post office"], ["Blackwater", "Roof of the theater in Blackwater"],
      ["Armadillo", "Pig pen in Armadillo"], ["Rio Bravo", "Flatneck Station"], ["The Grizzlies", "Around Lake Don Julio"],
      ["San Francisco", "Fort Brennand"], ["Tall Trees", "Flatneck Station"], ["Valentine", "Valentine station"],
      ["Chicago", "Windmill near Emerald Ranch"], ["Rhodes", "Rhodes cemetery"], ["Annesburg", "Mine track in Annesburg"] ] },
    { id: "champions", title: "The World's Champions", reward: "Valerian Root + $50", items: [
      ["Percy Wood (wrestler)", "Water well in New Hanover"], ["Edwin A. Rowe (billiards)", "Clawson's Rest"], ["Theobaud Getzin (boxer)", "Emerald Ranch"],
      ["H. T. Slocum (rower)", "Around Canebreak Manor"], ["R. S. Harradon (cyclist)", "House opposite Slocum's"], ["E. D. Ewing (race walker)", "Old Trail Rise"],
      ["Patsey Hill (tennis)", "Railing of a cabin's back porch"], ["William Sleicher (weightlifter)", "Heartland Oil Fields"], ["Edwin Singerly (trapshooter)", "Mine tower in Annesburg"],
      ["Felix Hawley (skater)", "Around Barrow Lagoon"], ["Capt. Jack Page (hammer throw)", "Cabin in northern Ambarino"], ["Axel McCormack (club swinging)", "Behind the Bastille Saloon (Saint Denis)"] ] }
  ].map(s => ({ ...s, finish: "Set sent to Phineas" })),
      status: g => {
        const sent = !!RDR.get(g.finishKey), have = cards(g);
        return { done: sent, text: sent ? "✓ sent" : have === g.items.length ? "ready to send" : `${have}/${g.items.length}` };
      }
    }],
    metrics: {
      cards: () => ({ have: RDR.sum(groups(), cards), total: RDR.sum(groups(), g => g.items.length) }),
      sets: () => RDR.ratio(groups().map(g => g.finishKey))
    },
    meters: [["cards", "Cards collected"], ["sets", "Sets sent"]]
  });
})();
