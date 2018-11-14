const express = require('express');
const app = express();
const app_name = require('./package.json').name;

app.use(express.static('public'));

    app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
  });
  

  app.get('/about', (req, res, next)=>{
    res.sendFile(__dirname + '/views/about.html')
  })

  app.get('/gallery', (req, res, next)=>{
    res.sendFile(__dirname + '/views/gallery.html')
  })


  module.exports = app;

  app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });