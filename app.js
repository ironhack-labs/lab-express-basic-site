const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Welcome To Guadeloupe");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});
