const express = require('express')

const app = express();

app.use(express.static('public'))

app.use((response, request, next) => {
    console.log("Hit my custom middleware")
    next();
});

app.get('/', (request, response, next) => {
    console.log('Got request in express app');
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
    console.log('Got request in express app');
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    console.log('Got request in express app');
    response.sendFile(__dirname + '/views/gallery.html');
});

app.get('*', (request, response, next) => {
    response.status(404)
    response.send('Got lost');
})

app.listen(3000);
