// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// our first Route:
app.use(express.static('public'));



app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});
 
app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/photo', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
