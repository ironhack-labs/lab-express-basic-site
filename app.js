const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/homepage", (request, response, next) => {
  response.sendFile(__dirname + "/views/homepage.html");
  next();
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
  next();
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
  next();
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
  next();
});

app.listen(3000, () => console.log("My first app listening on port 3000!"));
