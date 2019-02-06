var express = require('express');
var app = express();
var path = require("path")

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder

app.use(express.static(path.join(__dirname, '/views')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/views', 'home.html'));
});


var server = app.listen(3000);

// let express = require('express')
// var path = require('path');
// let app = express();
// var public = path.join(__dirname, 'public');

// app.use(express.static('public'))


// app.get("/", (req, res) => {
//     res.sendFile(__dirname + '/views/home.html')
// })

// app.get("gallery", (req,res) => {
//     res.sendFile(__dirname + '/views/gallery.html')
// })

// app.get("about", (req, res) => {
//     res.sendFile(path.join(public, '/about.html'))
// })

// app.listen(3000, function() {
//     console.log("Funcionando en el puerto 3000!")
// })

