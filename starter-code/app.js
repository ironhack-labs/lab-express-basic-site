const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));  

// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/gallery.html');
});

// Server Started
app.listen(3000, () => {
  console.log('Server app and running p0rt 3000 listening!')
});