
const express = require('express');


const app = express();
app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/homePage.html');
});

app.get('/aboutUs', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-us.html');

});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photoGallery.html');
});


app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});