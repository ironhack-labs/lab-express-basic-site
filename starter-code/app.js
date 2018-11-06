const express = require('express');
const app = express();


app.use(express.static('public'));
// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// about route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// photo gallery page 
app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photos.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});


