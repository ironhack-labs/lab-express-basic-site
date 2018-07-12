const express = require('express');

const app = express()

// Necesitamos carpeta public para estos ficheros
app.use(express.static('public'));

//si vas a home
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

//escucha y queda a la espera (no hace falta reiniciar servidor)
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});