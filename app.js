const express = require('express');

const app = express();

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});


app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});


app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('listening on port 3000!');
});