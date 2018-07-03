// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// About route:
app.get('/About', (request, response, next) => {
  response.sendFile(__dirname + '/views/About.html');
});

app.get('/Gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/Gallery.html');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});