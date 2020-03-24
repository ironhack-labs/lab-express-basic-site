// SET UP

// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


// HOME PAGE
app.get('/', (request, response) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home-page.html');
});


// ABOUT PAGE
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html')
  });


//   WORKS PAGE
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works-page.html')
  });


//   PHOTO GALLERY PAGE
app.get('/photo-gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo_gallery-page.html')
  });
  
  
//   SERVER STARTED
  app.listen(3000, () => {
      console.log('My first app listening on port 3000')
});