// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// home route:
app.get('/', (req, res, next) => res.render('index'))

// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/portfolio.html'));

// photo route:
app.get('/photo', (request, response, next) => response.sendFile(__dirname + '/views/team.html'));

// portfolio details route:
app.get('/portfolio-details.html', (request, response, next) => response.sendFile(__dirname + '/views/portfolio-details.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));

//Public
app.use(express.static('public'));