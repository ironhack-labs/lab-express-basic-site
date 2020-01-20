//app: Our express server

const express = require("express");
const app = express();


// Server Started
app.listen(3000, () => {
  console.log('My first APP listening on port 3000!')

});

// Make everything inside of public/ available
//Access cat and Neo picture
app.use(express.static('public'));

//Home route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// About route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

//Photo gallery route:
app.get('/photo-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});