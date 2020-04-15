const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/homepage.html");
});
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});
app.get("/photo-gallery", (request, response) => {
  response.sendFile(__dirname + "/views/photogallery.html");
});

app.listen(8080, () => {
  //   console.log("Listen to port 3000");
});
