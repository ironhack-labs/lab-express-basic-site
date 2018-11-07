const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Our server is READY!");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendfile(__dirname + "/views/home-page.html");
});

app.get("/about-page", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

app.get("/photogallery-page", (request, response, next) => {
  response.sendFile(__dirname + "/views/photogallery-page.html");
});
