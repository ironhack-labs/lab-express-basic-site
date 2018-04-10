// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Primera ruta
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});
  // Primera ruta
  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });
  app.get('/photo', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo.html');
  });

  // Server Stater

  app.listen(3000, ()=>{
    console.log('My first app listening on port 3000!')
});