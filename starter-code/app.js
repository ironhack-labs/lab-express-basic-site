// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// our first Route:
app.get('/', (request, response, next) => {
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

app.get('/about', (request, response, next) => {
  response.send('<h1>Este é o meu about. :)</h1>');
});

app.get('/gallery', (request, response, next) => {
  response.send('<h1>Galeria de Fotos. :)</h1>');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

