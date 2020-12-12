const express = require('express');

const app = express();

// Making files in "public" directory available to the browser
app.use(express.static('public'));

app.get('/home', function (request, response) {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/work', function (request, response) {
  response.sendFile(__dirname + '/views/work.html');
});

app.get('/gallery', function (request, response) {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000);
