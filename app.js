// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/public/views/home.html'));

// works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/public/views/works.html'));

// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/public/views/about.html'));

// Server Started
app.listen(3001, () => console.log('My first app listening on port 3001!'));


