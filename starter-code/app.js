const express = require('express');


const spidermanApp = express();

spidermanApp.use(express.static('public'));

// our home route
spidermanApp.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// about route:
spidermanApp.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// gallery route:
spidermanApp.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

// javascript :
spidermanApp.get('/javascript', (request, response, next) => {
  response.sendFile(__dirname + '/javascript/javascript.js');
});


// Server Started
spidermanApp.listen(3000, () => {
console.log('My spiderman app listening on port 3000!')
});