const express = require("express");

const app = express();

// makes everything inside of public available
app.use(express.static("public"));

// get route for home
app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

// get route for about
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

// get route for works
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

// get route for works
app.get("/photo-gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
