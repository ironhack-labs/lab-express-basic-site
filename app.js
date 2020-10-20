const { request, response } = require("express");
const express = require("express");

const app = express();

// Hacemos público el contenido de la carpeta public
app.use(express.static("public"));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/Home.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/About.html');
});

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/Works.html');
});

app.get('/photogallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/Photogallery.html');
});

app.listen(3000, () => {
    
})