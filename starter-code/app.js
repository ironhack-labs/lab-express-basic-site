const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

// Make everything inside of public/ available
app.use(express.static('public'));

// home page Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// About Ye Route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});
//Yeezy route
app.get('/kanye', (request, response, next) => {
  response.sendFile(__dirname + '/views/kanye-page.html');
});

