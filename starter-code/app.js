const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

  // our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });
  
  // cat route:
  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });
  app.get('/photo-gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photogalley.html');
  });

  app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });