
const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/fan-images', (request, response, next) => {
    response.sendFile(__dirname + '/views/images-page.html');
});