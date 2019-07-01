/*
GET:hace la solicitud de la pagina. 
      me arroja todo los documentos
POST:interracion entre el usuario, Le agrego cosas y que haces con ellas?
      mando al server la informacion que solicita y me arroja alguna respuesta
 node--inspect-brk-programa 
*/

// Require Express
const express = require('express');
// Express server handling requests and responses
const app = express();
app.use(express.static("public"));


// our first Route:
app.get('/', (request, response, next) => {
      response.sendFile(__dirname + '/views/home-page.html')
});


app.get("/galery", (request, response, next) => {
  response.sendFile(__dirname + "/views/galery.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});