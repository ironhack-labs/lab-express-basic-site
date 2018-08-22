const express = require("express");

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static("public"));

//////// - The routes (one for each page)

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", function(req, res) {
  res.sendFile(__dirname + "/views/about-page.html");
});
app.get("/photo", function(req, res) {
  res.sendFile(__dirname + "/views/photo.html");
});

// Server starts here

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
