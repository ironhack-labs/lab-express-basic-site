// requerimos el paquete express
const express = require("express");

// ejecutamos express y guardamos el resultado en una constante
const app = express();

// Hacemos público el contenido de la carpeta public
app.use(express.static("public"));

// definimos una ruta para la home
    app.get("/home", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html");
    });

    app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
    });

    app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html");
    });

    app.get("/photo-gallery", (request, response, next) => {
    response.sendFile(__dirname + "/views/photo-gallery.html");
    });

    app.listen(3000, () => {
    console.log("App listening on port 3000!");
    });