const express = require('express');
const app = express();

app.use(express.static('starter-code/public'));
  //Rutas
app.get('/', (request, response, next) => {

    response.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (request, response, next) => {

    response.sendFile(__dirname + '/views/about.html');
});
app.get('/gallery', (request, response, next) => {

    response.sendFile(__dirname + '/views/gallery.html');
});
  
  // Server
app.listen(3000, () => {
    console.log('Port 3000')
});
