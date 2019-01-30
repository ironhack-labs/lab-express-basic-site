// CONFIG
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(5050, () => {
  console.log("2nd EXPRESS app is now running!");
});

// CONTENT
app.get("/", (request, response, next) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/views/gallery.html");
});
