const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/index.html');
  });

  // our second Route
app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/about.html');
  });

  // our third Route
app.get('/photos', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/photos.html');
  });


  // Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });