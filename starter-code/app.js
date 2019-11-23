const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

//rutas
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/views/about.html");
});
app.get("/gallery", (req, res)=>{
    res.sendFile(__dirname + "/views/gallery.html");
});
app.listen(3000, () =>{
    console.log(`Running on http://localhost:3000`);
});


