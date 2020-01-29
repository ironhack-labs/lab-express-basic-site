const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log("running");
  response.sendFile(__dirname + "/homepage.html");
});
app.get("/photo-gallery", (request, response) => {
  console.log("hallooo");
  response.sendFile(__dirname + "/photo-gallery.html");
});
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/about.html");
});

app.listen(3000, () => {
  console.log("hello");
});
