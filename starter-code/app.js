// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('principal'));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname+"/principal/index.html");
});
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname+"/principal/about.html");
});
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname+"/principal/gallery.html");
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});