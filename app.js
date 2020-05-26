const express = require('express');

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// the routes:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/photogallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photogallery.html');
});

app.listen(3000, () => {
    console.log('Server started!');
});
