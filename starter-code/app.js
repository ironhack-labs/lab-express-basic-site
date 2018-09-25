// Require Express
const express = require('express');

// Servidor de express manejo de requests y responses
const app = express();

// Se hace disponible el directorio /public - pa todos
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));

//app.use(express.static("public/css"));


// Ruta: Home
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// Ruta: About
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// Ruta: Photo Gallery
app.get('/photo', (request, response, next) => {
  response.sendFile(__dirname + '/views/photogallery.html');
});

// Server Started
app.listen(3000, () => {
  console.log('Listening port: 3000!');
});