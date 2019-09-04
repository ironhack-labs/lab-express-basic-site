const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/photo_gallery.html");
});

app.listen(3002, () => {
  console.log("...server is ready");
});
