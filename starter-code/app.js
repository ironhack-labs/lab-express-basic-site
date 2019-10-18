const express = require('express');
const app = express();

app.get('/', (request, response, next) => {
    response.send('/');
});

app.get('/home', (request, response, next) => {
    response.send('Home');
});

app.get('/about', (request, response, next) => {
    response.send('About');
});

app.get('/photo', (request, response, next) => {
    response.send('Photo');
});

app.listen(3000);