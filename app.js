const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/games', (request, response) => {
    response.sendFile(__dirname + '/views/games.html');
});

app.get('/re-remake', (request, response) => {
    response.sendFile(__dirname + '/views/re-remake.html');
});

app.get('/re-4', (request, response) => {
    response.sendFile(__dirname + '/views/re-4.html');
});

app.get('/god-hand', (request, response) => {
    response.sendFile(__dirname + '/views/god-hand.html');
});

app.get('/killer-7', (request, response) => {
    response.sendFile(__dirname + '/views/killer-7.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});