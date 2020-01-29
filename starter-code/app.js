const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log("GET request made to homepage");
  response.sendFile(__dirname + "/views/home.html"); // route for home page
});

app.get("/about", (request, response) => {
  console.log("GET request made to /about");
  response.sendFile(__dirname + "/views/about.html"); // route for the about page
});

app.get("/gallery", (request, response) => {
  console.log("GET request made to /gallery");
  response.sendFile(__dirname + "/views/gallery.html"); // route for the gallery page
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
