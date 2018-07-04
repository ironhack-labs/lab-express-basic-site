const express = require('express');
const app = express();

app.use(express.static( __dirname + '/public' ));

app.get('/', (req, res) => {
  res.sendFile( 'index.html' );
});

app.get('/about', (req, res) => {
  res.sendFile( __dirname + '/public/about.html' );
});

app.get('/gallery', (req, res) => {
  res.sendFile( __dirname + '/public/gallery.html' );
});

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});