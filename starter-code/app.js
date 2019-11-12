const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'));

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
  });

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
  });

app.listen(PORT, () => {
    console.log('Listening on port 3000!');
  });