// Require Express
const express = require('express');
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Home route
app.get('/', (request, response, next) => {
	console.log('request');
	response.sendFile(__dirname + '/views/home-page.html');
});

// About route
app.get('/about', (request, response, next) => {
	response.sendFile(__dirname + '/views/about-page.html');
});

// Gallery route
app.get('/gallery', (request, response, next) => {
	response.sendFile(__dirname + '/views/gallery-page.html');
});

// Server started
app.listen(3000, () => {
	console.log('My very first app listening on port 3000!');
});
