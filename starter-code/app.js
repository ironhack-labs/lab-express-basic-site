const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Route to Home page
app.get('/', (request, response, next) => {
  console.log(request.url);
  response.sendFile(__dirname + '/views/home.html');
});

//Route to the about page
app.get('/about', (request, response, next) => {
  console.log(request.url);
  response.sendFile(__dirname + '/views/about.html');
});

//Route to the photo page
app.get('/photo', (request, response, next) => {
  console.log(request.url);
  response.sendFile(__dirname + '/views/photo.html');
});


  app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });