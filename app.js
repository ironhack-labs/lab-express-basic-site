// Require Express
const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

// Make everything inside of public/ avaliable
app.use(express.static('public'));

// our first Route Home Page
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home-page.html');
});

// our second Route About Page
app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about-page.html');
});

// our third Photo Gallery Page
app.get('/photogallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/photo-gallery.html');
});