const express = require ('express');

// creando la app

const app = express ();

// diciendole que esta ruta seran estaticas

app.use(express.static('public'));

// llamando las paginas webs

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/Home.html');
  });

  app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/About.html');
  });

  app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/Works.html');
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });