const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

// Handle 404
app.use(function(req, res) {
  res.send('404: Aquí no hay lo que buscas ', 404);
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});