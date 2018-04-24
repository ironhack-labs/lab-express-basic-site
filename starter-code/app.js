const express = require('express');
const app = express();

app.use(express.static('public'));//takes public folder from url

app.listen(3000, () => {
  console.log('celebrity app listening on port 3000!')
});

// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });

  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html');
  });

  app.get('/photos', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
  });