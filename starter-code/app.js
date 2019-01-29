const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    // console.log(request);
    response.sendFile(__dirname+'/views/index.html');
  });

  app.get('/about', (request, response, next) => {
    // console.log(request);
    response.sendFile(__dirname+'/views/about.html');
  });
  app.get('/gallery', (request, response, next) => {
    // console.log(request);
    response.sendFile(__dirname+'/views/gallery.html');
  });





  app.listen(3000, () => {
    console.log('jnwvjnegjnofwjnofvjn')
  });