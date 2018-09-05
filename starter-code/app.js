const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.status(200);
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", function(req, res){
    res.status(200);
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/gallery", function(req, res){
    res.status(200);
    res.sendFile(path.join(__dirname, "views", "gallery.html"));
});

app.listen(3000, function(){
    console.log("Connected to server!");
});