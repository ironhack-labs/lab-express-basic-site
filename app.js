//en una variable requerimos el paquete express. 
const express = require("express");

//ejecutamos el paquete express. 
const app = express();

//hacemos uso de los archivos estáticos de la carpeta public
app.use(express.static("public"));

//establecemos el metodo get, para cuando vamos a la página index.
app.get("/", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/index.html')
});

//establecemos el metodo get, para cuando vamos a la página collection.
app.get("/collection", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/collection.html')
});

//establecemos el metodo get, para cuando vamos a la página about.
app.get("/about", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/about.html')
});

//establecemos el metodo get, para cuando vamos a la página pictures.
app.get("/pictures", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/pictures.html')
});

//almacenamos nuestro puerto en una constante.
const port = 3000;

//escuchamos al puerto 3000 con el metodo listen.
app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
  });