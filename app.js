const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

//Homepage
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});

// About route:
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });
  

  // Works route:
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
  });

    // Photo Gallery route:
app.get('/photogallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photogallery.html');
  });


app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});