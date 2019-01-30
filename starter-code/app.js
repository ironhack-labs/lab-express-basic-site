const express = require('express');

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// first Route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// second Route
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

// third Route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});