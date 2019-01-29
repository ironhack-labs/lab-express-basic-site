const express = require("express");
const app = express();
const fs = require("fs");

app.get("/home", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/photoGallery", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/photoGallery.html");
});

app.listen(3000, () => {
  console.log("Servidor express puerto 3000");
});
