const express = require('express'); //asi declaramos la dependencia

const PORT = process.env.PORT || 3000; //el puerto 3000 es el puerto elegido para express
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(PORT, () => {
  console.info(`App listen in port ${PORT}`)
}); //estamos escuchando desde el puerto definido
