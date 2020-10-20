const express = require("express");
const app = express();

app.use(express.static("public"));

// * Routes

// * Home Page
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

// * About Page
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

// * Works Page
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

// * Gallery Page
app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

// * Listening our server
app.listen(3000, () => {
  console.log("App listening on my beautifull and new port 3000!");
});
