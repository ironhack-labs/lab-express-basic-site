const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
});

app.get('/photo', (request, response) => {
    response.sendFile(__dirname + '/views/photo.html')
});

app.get('/kermit', (request, response) => {
    response.sendFile(__dirname + '/public/images/kermit_not_hear.jpg')
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});