const express = require("express");

const app = express();

app.use(express.static("public"));

app.use(express.static("views"));

// routes

app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

// FALLBACK ROUTE

// To route the user to the Homepage

app.get("*", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

//

// check if app is listening

app.listen(5500, () => {
  console.log("Listening on port 5500");
});
