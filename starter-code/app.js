// Server Started



const express = require('express');
const app = express();

app.listen(3000, () => {});

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {

    response.sendFile(__dirname + '/views/main.html');
});

app.get('/about', (request, response, next) => {

    response.sendFile(__dirname + '/views/about-us.html');
});

app.get('/photo-gallery', (request, response, next) => {

    response.sendFile(__dirname + '/views/photo-gallery.html');
});