const mongoose = require('mongoose');
require('../config/dbConnection');
const Episode = require('../models/episode');

const axios = require('axios');
axios
	.get('https://www.episodate.com/api/show-details?q=the-office-us')
	.then((response) => {
		let episodes = response.data.tvShow.episodes;
		Episode.insertMany(episodes)
			.then((dbRep) => console.log('Database seeded with success !'))
			.catch((dbErr) => console.log(dbErr));
	})
	.catch(function (error) {
		console.log(error);
	});
