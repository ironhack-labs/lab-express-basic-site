const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
  });
  
  // gallery route:
  app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
  });

    // about route:
    app.get('/gallery', (request, response, next) => {
        response.sendFile(__dirname + '/views/about.html');
      });

  
  // Server Started
app.listen(3000, () => {
    console.log('My first Express!')
  });