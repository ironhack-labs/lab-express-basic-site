const express = require("express");
const app = express();

app.use(express.static("public")); // short cut so you do not need to write public anymore

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about-page", (request, response) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

app.get("/gallery", (request, response) => {
  response.sendFile(__dirname + "/views/gallery-page.html");
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
