const express = require("express");
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// home page Route:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

// about page route:
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

// about page route:
app.get("/photo-gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});

// Server Started
app.listen(3000, () => {
  console.log("My Second app listening on port 3000!");
});
