// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


// INDEX: first route 
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

// ABOUT: second route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});


// GALLERY: third route
app.get('/gallery', (request, response, next ) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

// server started on port 3000
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});