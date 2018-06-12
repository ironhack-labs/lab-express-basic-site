const express = require("express");

const app = express();
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Started your first own server! ");
});

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});
