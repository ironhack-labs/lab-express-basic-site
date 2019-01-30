
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });

app.get('/imagesgallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/imagesgallery.html');
});

app.listen(3000, () => {
    console.log("listen port 3000")
});

