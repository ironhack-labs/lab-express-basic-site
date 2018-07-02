const express = require('express');
const app = express();

app.use(express.static('public'));

//Set up a Route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about-us', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-us.html');
});

app.get('/photo-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

//Server Started

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});








