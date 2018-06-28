const express = require('express');
const cows = require('cows');
vacas = cows();
console.log(vacas[Math.floor(Math.random() * 150)]);

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/homePage.html');
});

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/homePage.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/galleryPage.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/aboutPage.html');
});

// Server Started
app.listen(3000, () => {
  console.log('Ejemplo de pagina con express escuchando en el puerto 3000!');
});
