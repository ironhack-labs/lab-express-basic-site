const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/home', (request, response, next) => {
    
    response.sendFile(__dirname + '/views/home-pages.html')
    
});
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
  });

  app.get('/galeria', (request, response, next) => {
    response.sendFile(__dirname + '/views/galeria.html');
  });


  app.listen(3000,()=>console.log('listening on port 3000 !'))
  