const express = require("express");
const app = express();
app.listen(3000);
app.use(express.static(__dirname + "/public"));

//ROUTES
//home
app.get("/", (request, response, next) =>{
    response.sendFile(__dirname + "/public/html/home.html"); 
});

//about
app.get("/about", (request, response, next) =>{
 response.sendFile (__dirname + "/public/html/about.html");
});

//gallery
app.get("/gallery", (request, response, next) =>{
    response.sendFile (__dirname + "/public/html/gallery.html");
   });