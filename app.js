const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get(["/", "/index.html", "/home"], (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get(["/about", "/about.html"], (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get(["/works", "/works.html"], (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get(["/photoGallery", "/photoGallery.html"], (request, response, next) => {
  response.sendFile(__dirname + "/views/photoGallery.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
