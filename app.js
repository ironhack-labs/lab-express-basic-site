
const express = require('express');

const app = express();

app.use(express.static('public'));

// first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// second route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// third route:
app.get('/photo-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

// Server Started
app.listen(3000, () => {
});