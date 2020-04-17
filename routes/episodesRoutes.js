const express = require('express');
const router = new express.Router();

const Episode = require('../models/episode');

async function allRequests(seasonNb = 1) {
	const requests = {};
	try {
		requests.all = await Episode.find()
			.then((all) => all)
			.catch((err) => console.log(err));
		requests.seasons = [];
		[...requests.all].forEach((x) => {
			if (requests.seasons.find((y) => y === x.season)) return;
			else requests.seasons.push(x.season);
		});
		requests.thisSeason = await Episode.find({ season: seasonNb })
			.then((season) => season)
			.catch((err) => console.log(err));
		return requests;
	} catch (err) {
		console.log(err);
	}
}

router.get(['/', '/:season'], function (request, response) {
	let season = request.params.season != undefined ? request.params.season.substr(7) : 1;
	allRequests(season)
		.then((res) => {
			response.render('episodes', {
				isEpisodes: true,
				title: 'Episodes',
				css: 'episodes',
				listEpisodes: res,
			});
		})
		.catch((err) => console.log(err));
});

module.exports = router;
