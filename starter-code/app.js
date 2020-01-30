const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log("test");
  response.sendFile(__dirname + "/views/homepage.html");
});

app.get("/about", (request, response) => {
  console.log("getting to about");
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response) => {
  console.log("getting to about");
  response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {});
