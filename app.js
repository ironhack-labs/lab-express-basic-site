const express = require('express');


const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/about.html');
});
app.get('/works', (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/works.html');
});
app.get('/gallery', (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/gallery.html');
});
app.listen(3000);