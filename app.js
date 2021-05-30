const express = require('express');

const app = express();


app.use (express.static ("public"))


app.get('/', (request, response, next) => {
    console.log(request);
    response.sendFile(`${__dirname}/views/home.html`)
  });

app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(`${__dirname}/views/about.html`)
  });

  app.get('/works', (request, response, next) => {
    console.log(request);
    response.sendFile(`${__dirname}/views/works.html`)
  });



  //correr el server

  app.listen (3000,()=>{
      console.log("el server está corrriendo")
  })