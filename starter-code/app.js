const express = require('express');
const app = express();

// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about-page', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/gallery-page', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/gallery-page.html');
});

app.use(express.static('public'));

//app.get('/', (request, response, next) => {


app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});