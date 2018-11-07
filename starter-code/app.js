const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
    response.send('/views/index.html');
});

app.get('/About', (request, response, next) => {
    console.log(request);
      response.send('/views/about.html');
  });

  app.get('/Gallery', (request, response, next) => {
    console.log(request);
      response.send('/views/gallery.html');
  });
  

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});