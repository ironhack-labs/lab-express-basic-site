// We create our own server named app
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home.html');
});

// second route
app.get('/amsterdam', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// third route
app.get('/amsterdam', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
