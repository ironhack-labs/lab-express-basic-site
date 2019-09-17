const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  console.log("Welcome to the homepage");
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
  console.log("About page requested");
  response.sendFile(__dirname + '/views/about.html');
})

app.get('/gallery', (request, response, next) => {
  console.log("Gallery page requested");
  response.sendFile(__dirname + '/views/gallery.html');
})

app.listen(3000, () => {
  console.log("The page is now running correctly");
})