//Request express
const express = require('express');

// Express server handling requests and responses
const app = express();

//Make the public folder available
app.use(express.static('public'));

//First route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

//About route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

//Gallery route
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

//Server started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});