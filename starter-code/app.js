const express = require('express');

const app = express();



app.use(express.static('public'));




app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home-page.html');
  });


  app.get('/about', (req, res, next)=>{
    res.sendFile(__dirname + '/views/about.html');
  });


  app.get('/gallery', (req, res, next)=>{
    res.sendFile(__dirname + '/views/gallery.html');
  });






app.listen(8080, () => {
    console.log('Server began: localhost8080')
  });