const express = require('express'),
app = express()

app.use(express.static('starter-code/public'));


//Home
  app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/starter-code/public/views/home.html');
  });

  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/starter-code/public/views/about.html');
  });

  app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/starter-code/public/views/gallery.html');
  });
  
app.listen(3000, () => {
  console.log('Ready')
})