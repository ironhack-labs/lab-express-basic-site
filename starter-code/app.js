const express = require('express');

// use nodemon app.js to start the server
// check at localhost:3000

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Server Started
app.listen(3000, () => {
  console.log('App is listening on port 3000!')
});

// Make everything inside of public/ available
app.use(express.static('public/'));

// home route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// about route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// photo gallery route:
app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photos.html');
});