const express = require('express');

const app = express();
app.use(express.static('public'));

const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

app.get('./public/views/home.html', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>');


  });

  app.get('/about', (request, response, next) => {
    
    response.sendFile(__dirname + "./public/views/about.html");

    
  });



  app.get('/gallery', (request, response, next) => {
    
    response.sendFile(__dirname + "./public/views/gallery.html");
    
  });

  
  

  
  // ...

//Server Started
app.listen(4000, () => {
  console.log('My first app listening on port 3000!')
});



