const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname+ "/public"));
app.get('/home', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname +"/views/home.html");
  });


app.get('/about', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname +"/views/about.html");
  });

  app.get('/photogallery', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname +"/views/photogallery.html");
  });

  app.get('/works', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname +"/views/works.html");
  });

  app.listen(port, () => console.log(`Server is running on port: ${port}`));

  