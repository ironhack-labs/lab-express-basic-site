const express = require("express");

const app = express();

app.listen(1337, () => {
  console.log("Our Express app is READY!");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendfile(__dirname + "/views/gallery.html");
});
