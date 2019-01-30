const express = require("express");

const app = express();

app.listen(5557, () => {
  console.log("Express is ready to launch!");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});
