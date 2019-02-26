const express = require('express');//coge el paque express


//inicializa express
const app = express();


//te coje la carpeta que se llame public y la utiliza para archivos estaticos (imagenes y CSS)
app.use(express.static('public'));



//RUTAS
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





// inicializa el servidor
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});