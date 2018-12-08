// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route; Homepage:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// Second; Aboutpage:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});

// Third; Photo Gallery
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery-page.html');
});

// Server Started
app.listen(3000, () => {
  console.log('Blah blah blah!!!!');
});