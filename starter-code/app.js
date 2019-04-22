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
//second route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

//third route
app.get('/photo', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo.html');
});

// Server Started
app.listen(3000, () => {
  console.log('Hello!');
});