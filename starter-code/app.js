const express = require('express');
const app = express();

app.use(express.static('starter-code/public'));
// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/about-page.html');
  });

app.get('/gallery', (request, response, next) => {
console.log(request);
response.sendFile(__dirname + '/views/photo-gallery-page.html');
});

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });