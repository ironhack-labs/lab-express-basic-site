const express = require('express');
// Express server handling requests and responses
const app = express();

// making all the public items available
app.use(express.static('public'));

// first route: homes
app.get('/home-page.html', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});
// second route: about
app.get('/about.html', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});
// third route: gallery-page
app.get('/photo-gallery.html', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});
// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

