
const express = require('express');
const app = express();

app.use(express.static('public'));

// Index route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

// About route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// Gallery route
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

// Server Started
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});