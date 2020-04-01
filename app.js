// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response) => response.sendFile(__dirname + '/views/home.html'));

// about route:
app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));

// works route:
app.get('/works', (request, response) => response.sendFile(__dirname + '/views/works.html'));

// Photogallery route:
app.get('/photo-gallery', (request, response) => response.sendFile(__dirname + '/views/photo-gallery.html'));

// Server Started
app.listen(3000);