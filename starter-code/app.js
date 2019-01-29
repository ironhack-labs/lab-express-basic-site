// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Sempre vai procurar arquivos static do tipo public
app.use(express.static('public'));

// Home Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/home-page.html');
});

// About route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

// Gallery route:
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/gallery.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
