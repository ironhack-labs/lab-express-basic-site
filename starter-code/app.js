const express = require('express');
var path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.get('/', (request, response, next) => {

  response.sendFile(__dirname + '/view/home.html');
});
app.get('/about', (request, response, next) => {

  response.sendFile(__dirname + '/view/about.html');
});
app.get('/gallery', (request, response, next) => {

  response.sendFile(__dirname + '/view/gallery.html');
});


app.listen(3000, () => {
  console.log('My first app listening on port 3003!' + ' http://localhost:3000/')
});