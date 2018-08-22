const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});


app.get('/best-homes', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/best-homes', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
})