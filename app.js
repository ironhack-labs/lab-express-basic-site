const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/image-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/image-gallery.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});