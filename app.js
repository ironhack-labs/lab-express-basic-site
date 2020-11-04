const express = require("express");
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

app.get("/home", (request, response, next) => 
  response.sendFile(__dirname+'/views/home.html'));

app.get("/about", (request, response, next) => 
response.sendFile(__dirname+'/views/about.html'));

app.get("/works", (request, response, next) => 
response.sendFile(__dirname+'/views/works.html'));

app.get("/photoGallery", (request, response, next) => 
response.sendFile(__dirname+'/views/photoGallery.html'));

app.listen(3000);
