//libreria
const express = require("express");

//crear servidor se llama app
const app = express();

//configuracion
app.use(express.static(__dirname + "/public"));

//rutas
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/views/about.html")
})
app.get("/gallery", (req, res) =>{
    res.sendFile(__dirname + "/views/gallery.html")
})
//prender servidor
app.listen(3000, () => {
    console.log(`Running on http://localhost:3000`);
});