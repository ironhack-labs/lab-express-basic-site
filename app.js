const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('server 3000 working fine!');
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/work.html');
});

app.get('/photos', (request, response) => {
  response.sendFile(__dirname + '/views/photos.html');
});
