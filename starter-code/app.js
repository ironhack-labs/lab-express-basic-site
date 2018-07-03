const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// First Route
app.get('/', (request, resp, next) => {
  resp.sendFile(__dirname + '/views/home.html');
});

// our first Route
app.get('/about', (request, resp, next) => {
  resp.sendFile(__dirname + '/views/about.html');
});

// One Route
app.get('/photos', (request, resp, next) => {
  resp.sendFile(__dirname + '/views/photos.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});