const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log("GET request made to /");
  response.sendFile(__dirname + "/views/homepage.html");
});

app.get("/about", (request, response) => {
  console.log("GET request made to /about");
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response) => {
  console.log("GET request made to /gallery.html");
  response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
  console.log("Server listening on port: 3333");
});
