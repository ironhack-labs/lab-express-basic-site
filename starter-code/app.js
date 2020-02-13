// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'))

//our second Route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-me.html'))

//our third Route:
app.get('/flowers', (request, response, next) => response.sendFile(__dirname + '/views/flowers.html'))

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));