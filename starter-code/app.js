const express = require("express");

const app = express();
app.use(express.static("public"));

//home page
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

//about page
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

//photo gallery page
app.get("/photo-gallery", (request, response) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3000, () => {
  console.log("first web listening on port 3000");
});
