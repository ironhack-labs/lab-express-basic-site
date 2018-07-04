
const express = require('express');


const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/About', (request, response, next) => {
  response.sendFile(__dirname + '/views/About.html');
});

app.get('/Gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/Gallery.html');
  });

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});