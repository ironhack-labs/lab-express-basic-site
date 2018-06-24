const express = require("express");

const app= express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/index.html');
  });
  
  // gallery route:
  app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/gallery.html');
  });

  // about route:
  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/about.html');
  });



app.listen(3000, () => {
    console.log('works!')
  });