const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public/"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
