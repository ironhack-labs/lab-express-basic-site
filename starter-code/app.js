const express = require('express');
const app = express();

app.use(express.static('public')); //para traer los estilos

//home
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

//about
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

//gallery
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000,()=> console.log('server running')) 