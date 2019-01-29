// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
  });
  
  // cat route:
  app.get('/hi', (request, response, next) => {
    response.sendFile(__dirname + '/views/hi.html');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});