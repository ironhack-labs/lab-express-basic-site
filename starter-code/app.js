//Requiere la libreria express
const express = require("express");

//Crear el servidor de express
const app = express();

//Configuración express
app.use(express.static(__dirname + "/public"));

//Rutas
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html")
})



//echamos a andar el servidor
app.listen(3000, () => {
    console.log(`Running on http://localhost:3000`);
});
