const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/home.html');
}) 

app.get('/about', (request, response, next) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/photo', (request, response, next) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/public/views/photo.html');
});

//our first route

app.listen(3000,() => {}) 



