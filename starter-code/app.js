const express = require("express");
const app = express();

//Cargar siempre la carpeta public
app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.use((request, response) => {
    response.send('Ups! Esta pagina no existe', 404);
});

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  }); 