const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log(request);
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response) => {
  // response.send("<h3>ABOUT</h3>")
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/photo-gallery", (request, response) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
