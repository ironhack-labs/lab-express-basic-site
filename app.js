// requerimos el paquete express
const express = require("express");
// ejecutamos express y guardamos el resultado en una constante
const app = express();

// Hacemos público el contenido de la carpeta public
app.use(express.static("public"));

// definimos una ruta para la home
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/Home.html");
});

// app.get("/products", (request, response, next) => {
//   response.send("<h1>Product list</h1>");
// });

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/About.html");
});

app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/Works.html");
  });

app.get("/app", (request, response, next) => {
  response.json({ message: "APP test", data: "APP data" });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});