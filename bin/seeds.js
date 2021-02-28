require("./../config/mongodb");
const mongoose = require("mongoose");
const MovieModel = require("./../models/Movie.model");

const movies = [
  {
    "title": "Clerks",
    "year": 1994,
    "description": "A day in the lives of two convenience clerks named Dante and Randal as they annoy customers, discuss movies, and play hockey on the store roof.",
    "image": "img/posters/clerks.jpg",
    "trailer": "https://youtu.be/BGT3n1Emi8U",
    "isFavorite": false
  },
  {
    "title": "Mallrats",
    "year": 1995,
    "description": "Both dumped by their girlfriends, two best friends seek refuge in the local mall.",
    "image": "img/posters/mallrats.jpg",
    "trailer": "https://youtu.be/eOd5zJLsZEc",
    "bonus": "there' a Stan Lee cameo!",
    "isFavorite": false
  },
  {
    "title": "Chasing Amy",
    "year": 1997,
    "description": "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's a lesbian.",
    "image": "img/posters/amy.jpg",
    "trailer": "https://youtu.be/7K-z0EdVm2c",
    "bonus": "there's a very cool (and wise) monologue",
    "isFavorite": true
  },
  {
    "title": "Dogma",
    "year": 1999,
    "description": "An abortion clinic worker with a special heritage is called upon to save the existence of humanity from being negated by two renegade angels trying to exploit a loop-hole and reenter Heaven.",
    "image": "img/posters/dogma.jpeg",
    "trailer": "https://youtu.be/20CRw3XdETA",
    "bonus": "Alanis Morissette! (you'll see)",
    "isFavorite": true
  },
  {
    "title": "Jay & Silent Bob strike back",
    "year": 2001,
    "description": `The comic "Bluntman and Chronic" is based on real-life stoners Jay and Silent Bob, so when they get no profit from a big-screen adaptation, they set out to wreck the movie.`,
    "image": "img/posters/jay-bob-strike.jpeg",
    "trailer": "https://youtu.be/HjDSFna_LXQ",
    "bonus": "this one has an amazing cast",
    "isFavorite": true
  },
  {
    "title": "Jersey Girl",
    "year": 2004,
    "description": "A widower must look after his precocious daughter and rebuild his life and career after he's sidelined by an unexpected tragedy and a personal blowup.",
    "image": "img/posters/jersey-girl.jpg",
    "trailer": "https://youtu.be/CL04A-DrIEQ",
    "bonus": "that's a sweet one. Also, there's Ben Affleck AND Liv Tyler",
    "isFavorite": false
  },
  {
    "title": "Clerks II",
    "year": 2006,
    "description": "A calamity at Dante and Randal's shops sends them looking for new horizons - but they ultimately settle at the fast food empire Mooby's.",
    "image": "img/posters/clerks-2.jpg",
    "trailer": "https://youtu.be/lNXMB5FwSUc",
    "bonus": "there's a cool dance scene",
    "isFavorite": true
  },
  {
    "title": "Zack & Miri make a porno",
    "year": 2008,
    "description": "Lifelong platonic friends Zack and Miri look to solve their respective cash-flow problems by making an adult film together. As the cameras roll, however, the duo begin to sense that they may have more feelings for each other than they previously thought.",
    "image": "img/posters/zack-miri.jpg",
    "trailer": "https://youtu.be/OssgMY_mkMc",
    "bonus": "really funny and the cast is very cool!",
    "isFavorite": false
  },
  {
    "title": "Cop Out",
    "year": 2010,
    "description": "Jimmy's rare baseball card is robbed. Since it's his only hope to pay for his daughter's upcoming wedding, he recruits his cop partner Paul to track down the robber, a memorabilia-obsessed gangster.",
    "image": "img/posters/cop-out.jpg",
    "trailer": "https://youtu.be/22RvcEgrpnE",
    "bonus": "Bruce Willis",
    "isFavorite": false
  },
  {
    "title": "Red State",
    "year": 2011,
    "description": "Set in Middle America, a group of teens receive an online invitation for sex, though they soon encounter fundamentalists with a much more sinister agenda.",
    "image": "img/posters/red-state.jpg",
    "trailer": "https://youtu.be/H5I0q0qtD9k",
    "isFavorite": false
  },
  {
    "title": "Tusk",
    "year": 2014,
    "description": "A brash and arrogant podcaster gets more than he bargained for when he travels to Canada to interview a mysterious recluse... who has a rather disturbing fondness for walruses.",
    "image": "img/posters/tusk.jpg",
    "trailer": "https://youtu.be/BCQJnOn0ru0",
    "bonus": "NOT A BONUS, this one actually is quite disturbing, I'm still uncomfortable when I think about it, it isn't necessary to watch it (in my opinion), with all due respect to Kevin Smith",
    "isFavorite": false
  },
  {
    "title": "Yoga Hosers",
    "year": 2016,
    "description": "Two teenage yoga enthusiasts must do battle with an evil presence that is threatening to rise from its underground lair and endanger their major party plans.",
    "image": "img/posters/yoga-hosers.jpg",
    "trailer": "https://youtu.be/5EAy6-uCb1o",
    "isFavorite": false
  },
  {
    "title": "Jay & Silent Bob reboot",
    "year": 2019,
    "description": "Jay and Silent Bob inadvertently sign away their names and rights to the new Bluntman and Chronic movie. Now they head to Hollywood to stop the film from being made. Along the way Jay discovers that he is a father.",
    "image": "img/posters/jay-bob-reboot.jpg",
    "trailer": "https://youtu.be/cg74gGSzeYY",
    "bonus": "as always, the cast is cool, it's stupid but funny (I think) and there's a lot of pop culture references (did I mention Kevin Smith is a huge fanboy?!)",
    "isFavorite": false
  }
];

MovieModel.insertMany(movies)
.then(dbRes => {
  console.log("Movies added to the DB!", dbRes);
  mongoose.disconnect();
})
.catch(err => console.log(err));