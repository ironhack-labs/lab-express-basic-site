// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of starter-code/ available
app.use(express.static('public'));

// our first Route:
app.get('/index', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

// aboutus route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/aboutus.html');
});

// foto gallery route:
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
  });
// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});