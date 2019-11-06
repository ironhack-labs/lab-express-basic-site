const express = require('express');

const app = express();

app.use(express.static('public'));


// get(path/route, callbackfn(request, response)) --> HTTP GET method

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
});

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html')
});

app.listen(3000)