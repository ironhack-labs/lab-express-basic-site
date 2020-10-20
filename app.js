
//requerimos el paquete express
const express = require("express");

// ejecutamos express y guardamos el resultado en una constante
const app = express();

//Hacemos público el contenido de la carpeta public
app.use(express.static("public"));

// definimos una ruta para la home
app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

// * About Page
app.get("/About", function(req, res){
    res.sendFile(__dirname + "/views/About.html");
});

// * Works Page
app.get("/Works", function(req, res){
    res.sendFile(__dirname + "/views/Works.html");
});

// * Gallery Page
app.get("/PhotoGallery", function(req, res){
    res.sendFile(__dirname + "/views/PhotoGallery.html");
});

// * Listening our server
app.listen(3000, function(){
    console.log("app");
});



