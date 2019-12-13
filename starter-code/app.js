const express = require('express');  
const app = express(); 

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// about-us route:
app.get('/about-me', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-me.html');
});

// photo-gallery route:
app.get('/photo-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});