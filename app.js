const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/homepage", (request, response, next) => {
  res.sendFile(__dirname + "/views/homepage.html");
});

app.get("/about", (request, response, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (request, response, next) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => console.log("My first app listening on port 3000!"));
