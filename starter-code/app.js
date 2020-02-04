const express = require('express');

const app = express();

app.get('/', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>');
  });

  app.get('/about', (request, response, next) => {
    
    response.sendFile(__dirname + "/views/about.html");
    
  });

  app.get('/home', (request, response, next) => {
    
    response.sendFile(__dirname + "/views/home.html");
    
  });

  app.get('/gallery', (request, response, next) => {
    
    response.sendFile(__dirname + "/views/gallery.html");
    
  });

  
  

  
  // ...

//Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});



