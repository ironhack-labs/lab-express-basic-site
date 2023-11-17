const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar el uso de archivos estáticos en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de la página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

// Ruta de la página Acerca de
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'about.html'));
});

// Ruta de la página de Trabajos
app.get('/works', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'works.html'));
});

// Ruta de la página de Galería
app.get('/galeria', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'galeria.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
