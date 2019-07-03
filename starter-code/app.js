const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about-us', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-us.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname +'/views/gallery.html');
});

app.listen(3000, () =>{
  console.log('Express ta aqui');
});
