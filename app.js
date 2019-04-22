const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.listen(3003, () => {
  console.log('My first app listening on port 3000!')
 });

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-page.html');
});


