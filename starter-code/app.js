const express = require('express');

const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
});

// cat route:
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

// Server Started
app.listen(3000, () => {
    console.log('El servidoir de node esta funcionando en el puerto 3000!');
});