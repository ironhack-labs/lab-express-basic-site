// We create  own server named app
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

//home page Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/photos.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));