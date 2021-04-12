const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname + '/public'));

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/photo-gallery', (request, response) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.listen(port, () => console.log(`Server up on port ${port}! `));