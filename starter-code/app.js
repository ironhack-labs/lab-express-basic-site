// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// ...
// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

// Meg's route:
app.get('/staff/meg', (request, response, next) => {
  response.sendFile(__dirname + '/views/meg.html');
});
// ...

// Spela's route:
app.get('/staff/spela', (request, response, next) => {
  response.sendFile(__dirname + '/views/spela.html');
});
// ...

// Silvio's route:
app.get('/staff/silvio', (request, response, next) => {
    response.sendFile(__dirname + '/views/silvio.html');
  });
  // ...

  
// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});