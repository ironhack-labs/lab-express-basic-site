const express = require('express');


const app = express();


app.use(express.static('public'));




app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });
  



app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });


app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html');
    
    


  });

  app.get('/foto-gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/foto-gallery.html');
  });





app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });
  
