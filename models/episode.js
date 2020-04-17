const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
	season: Number,
	episode: Number,
	name: String,
});

const episodeModel = mongoose.model('Episode', episodeSchema);

// let db = [
//     // Season 1
//     { season: 1, nb: 1, nb_in_season: 1, title: "Pilot", director: "Ken Kwapis", writer: ["Ricky Gervais", "Stephen Merchant", "Greg Daniels"], original_air_date: new Date("2005-03-24"), us_viewers: 11.20 },
//     { season: 1, nb: 2, nb_in_season: 2, title: "Diversity Day", director: "Ken Kwapis", writer: ["B. J. Novak"], original_air_date: new Date("2005-03-29"), us_viewers: 6.00 },
//     { season: 1, nb: 3, nb_in_season: 3, title: "Health Care", director: "Ken Whittingham", writer: ["Paul Lieberstein"], original_air_date: new Date("2005-04-05"), us_viewers: 5.80 },
//     { season: 1, nb: 4, nb_in_season: 4, title: "The Alliance", director: "Bryan Gordon", writer: ["Michael Schur"], original_air_date: new Date("2005-04-12"), us_viewers: 5.40 },
//     { season: 1, nb: 5, nb_in_season: 5, title: "Basketball", director: "Greg Daniels", writer: ["Greg Daniels"], original_air_date: new Date("2005-04-19"), us_viewers: 5.00 },
//     { season: 1, nb: 6, nb_in_season: 6, title: "Hot Girl", director: "Amy Heckerling", writer: ["Mindy Kaling"], original_air_date: new Date("2005-04-26"), us_viewers: 4.80 },
//     // Season 2
//     { season: 2, nb: 7, nb_in_season: 1, title: "The Dundies", director: "Greg Daniels", writer: ["Mindy Kaling"], original_air_date: new Date("2005-09-20"), us_viewers: 9.00 },
//     { season: 2, nb: 8, nb_in_season: 2, title: "Sexual Harassment", director: "Ken Kwapis", writer: ["B. J. Novak"], original_air_date: new Date("2005-09-27"), us_viewers: 7.13 },
//     { season: 2, nb: 9, nb_in_season: 3, title: "Office Olympics", director: "Paul Feig", writer: ["Michael Schur"], original_air_date: new Date("2005-10-04"), us_viewers: 8.30 },
//     { season: 2, nb: 10, nb_in_season: 4, title: "The Fire", director: "Ken Kwapis", writer: ["B. J. Novak"], original_air_date: new Date("2005-10-11"), us_viewers: 7.60 },
//     { season: 2, nb: 11, nb_in_season: 5, title: "Halloween", director: "Paul Feig", writer: ["Greg Daniels"], original_air_date: new Date("2005-10-18"), us_viewers: 8.00 },
//     { season: 2, nb: 12, nb_in_season: 6, title: "The Fight", director: "Ken Kwapis", writer: ["Gene Stupnitsky", "Lee Eisenberg"], original_air_date: new Date("2005-11-01"), us_viewers: 7.90 },
//     { season: 2, nb: 13, nb_in_season: 7, title: "The Client", director: "Greg Daniels", writer: ["Paul Lieberstein"], original_air_date: new Date("2005-11-08"), us_viewers: 7.50 },
//     { season: 2, nb: 14, nb_in_season: 8, title: "Performance Review", director: "Paul Feig", writer: ["Larry Wilmore"], original_air_date: new Date("2005-11-15"), us_viewers: 8.00 },
//     { season: 2, nb: 15, nb_in_season: 9, title: "Email Surveillance", director: "Paul Feig", writer: ["Jennifer Celotta"], original_air_date: new Date("2005-11-22"), us_viewers: 8.10 },
//     { season: 2, nb: 16, nb_in_season: 10, title: "Christmas Party", director: "Charles McDougall", writer: ["Michael Schur"], original_air_date: new Date("2005-12-06"), us_viewers: 9.70 },
//     { season: 2, nb: 17, nb_in_season: 11, title: "Booze Cruise", director: "Ken Kwapis", writer: ["Greg Daniels"], original_air_date: new Date("2006-01-05"), us_viewers: 8.70 },
//     { season: 2, nb: 18, nb_in_season: 12, title: "The Injury", director: "Bryan Gordon", writer: ["Mindy Kaling"], original_air_date: new Date("2006-01-12"), us_viewers: 10.30 },
//     { season: 2, nb: 19, nb_in_season: 13, title: "The Secret", director: "Dennie Gordon", writer: ["Lee Eisenberg", "Gene Stupnitsky"], original_air_date: new Date("2006-01-19"), us_viewers: 8.70 },
//     { season: 2, nb: 20, nb_in_season: 14, title: "The Carpet", director: "Victor Nelli, Jr", writer: ["Paul Lieberstein"], original_air_date: new Date("2006-01-26"), us_viewers: 8.60 },
//     { season: 2, nb: 21, nb_in_season: 15, title: "Boys and Girls", director: "Dennie Gordon", writer: ["B. J. Novak"], original_air_date: new Date("2006-02-02"), us_viewers: 5.42 },
//     { season: 2, nb: 22, nb_in_season: 16, title: "Valentine's Day", director: "Greg Daniels", writer: ["Michael Schur"], original_air_date: new Date("2006-02-09"), us_viewers: 8.95 },
//     { season: 2, nb: 23, nb_in_season: 17, title: "Dwight's Speech", director: "Charles McDougall", writer: ["Paul Lieberstein"], original_air_date: new Date("2006-03-02"), us_viewers: 8.40 },
//     { season: 2, nb: 24, nb_in_season: 18, title: "Take Your Daughter to Work Day", director: "Victor Nelli, Jr", writer: ["Mindy Kaling"], original_air_date: new Date("2006-03-16"), us_viewers: 8.80 },
//     { season: 2, nb: 25, nb_in_season: 19, title: "Michael's Birthday", director: "Ken Whittingham", writer: ["Gene Stupnitsky", "Lee Eisenberg"], original_air_date: new Date("2006-03-30"), us_viewers: 7.80 },
//     { season: 2, nb: 26, nb_in_season: 20, title: "Drug Testing", director: "Greg Daniels", writer: ["Jennifer Celotta"], original_air_date: new Date("2006-04-07"), us_viewers: 7.80 },
//     { season: 2, nb: 27, nb_in_season: 21, title: "Conflict Resolution", director: "Charles McDougall", writer: ["Greg Daniels"], original_air_date: new Date("2006-05-04"), us_viewers: 7.40 },
//     { season: 2, nb: 28, nb_in_season: 22, title: "Casino Night", director: "Ken Kwapis", writer: ["Steve Carell"], original_air_date: new Date("2006-04-11"), us_viewers: 7.60 },
//     // Season 3
// ];

module.exports = episodeModel;
