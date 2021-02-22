// let movies = [
//   {
//     title: "Clerks",
//     year: 1994,
//     description: "A day in the lives of two convenience clerks named Dante and Randal as they annoy customers, discuss movies, and play hockey on the store roof."
//   },
//   {
//     title: "Mallrats",
//     year: 1995,
//     description: "Both dumped by their girlfriends, two best friends seek refuge in the local mall."
//   },
//   {
//     title: "Chasing Amy",
//     year: 1997,
//     description: "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's a lesbian."
//   },
//   {
//     title: "Dogma",
//     year: 1999,
//     description: "An abortion clinic worker with a special heritage is called upon to save the existence of humanity from being negated by two renegade angels trying to exploit a loop-hole and reenter Heaven."
//   },
//   {
//     title: "Jay & Silent Bob strike back",
//     year: 1995,
//     description: `The comic "Bluntman and Chronic" is based on real-life stoners Jay and Silent Bob, so when they get no profit from a big-screen adaptation, they set out to wreck the movie.`
//   },
//   {
//     title: "Jersey Girl",
//     year: 2004,
//     description: "A widower must look after his precocious daughter and rebuild his life and career after he's sidelined by an unexpected tragedy and a personal blowup."
//   },
//   {
//     title: "Clerks II",
//     year: 2006,
//     description: "A calamity at Dante and Randal's shops sends them looking for new horizons - but they ultimately settle at the fast food empire Mooby's."
//   },
//   {
//     title: "Zack & Miri make a porno",
//     year: 2008,
//     description: "Lifelong platonic friends Zack and Miri look to solve their respective cash-flow problems by making an adult film together. As the cameras roll, however, the duo begin to sense that they may have more feelings for each other than they previously thought."
//   },
//   {
//     title: "Cop Out",
//     year: 2010,
//     description: "Jimmy's rare baseball card is robbed. Since it's his only hope to pay for his daughter's upcoming wedding, he recruits his cop partner Paul to track down the robber, a memorabilia-obsessed gangster."
//   },
//   {
//     title: "Red State",
//     year: 2011,
//     description: "Set in Middle America, a group of teens receive an online invitation for sex, though they soon encounter fundamentalists with a much more sinister agenda."
//   },
//   {
//     title: "Tusk",
//     year: 2014,
//     description: "A brash and arrogant podcaster gets more than he bargained for when he travels to Canada to interview a mysterious recluse... who has a rather disturbing fondness for walruses."
//   },
//   {
//     title: "Yoga Hosers",
//     year: 2016,
//     description: "Two teenage yoga enthusiasts must do battle with an evil presence that is threatening to rise from its underground lair and endanger their major party plans."
//   },
//   {
//     title: "Jay & Silent Bob reboot",
//     year: 2019,
//     description: "Jay and Silent Bob inadvertently sign away their names and rights to the new Bluntman and Chronic movie. Now they head to Hollywood to stop the film from being made. Along the way Jay discovers that he is a father."
//   }
// ];
const movies = document.querySelectorAll(".movie-box");

movies.forEach(movie => {
  movie.addEventListener("mouseover", (event) => {
    event.target.classList.add("movie-active");
  });
  movie.addEventListener("mouseout", (event) => {
    event.target.classList.remove("movie-active");
  })
});