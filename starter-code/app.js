const express = require('express');

let counter = 0;

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// home page
app.get('/home-page', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});

//an about page
app.get('/about', (request, response, next) => {
  console.log(request.params);
  response.sendFile(__dirname + '/views/about.html');
});

//the photo gallery page
app.get('/photo-gallery', (request, response, next) => {
  console.log(request.params);
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});