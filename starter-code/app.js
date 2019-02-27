const express = require('express');
const app = express();

app.use(express.static('public'));

// about home Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

// about route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});
// about route:
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});