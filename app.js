const express = require('express');
// We create our own server named app
// Express server handling requests and responses
const app = express();

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});


// Make everything inside of public/ available
app.use(express.static('public'));


// our first Route for the landing page
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// another Route for the about page
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});

// another Route for the /cat page
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery-page.html');
});