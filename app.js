const express = require('express');
const app = express();

app.use(express.static('public'));

// home
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});



// about
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});


// works
app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});



// photo gallery
app.get('/photogallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photogallery.html');
});






  app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });