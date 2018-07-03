// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static(__dirname +'/public'));
// app.use(express.static('/public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// our first Route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// our first Route:
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});


// Server Started
app.listen(31337, () => {
  console.log('My first app listening on port 31337!');
});


