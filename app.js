const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.listen(process.env.PORT || 3000, () => console.log('My first app listening on port 3000! '));