const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
  // send "hello world !" to the client
  response.sendfile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
  // send "hello world !" to the client
  response.sendfile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendfile(__dirname + "/views/gallery.html");
    
});

app.listen(3000, () => {
  console.log("Server Ready!");
});