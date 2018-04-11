const express = require("express");

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// our first Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// second Route
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

//third route
app.get("/photo-gallery", (req, res) => {
  res.sendFile(__dirname + "/views/photo-gallery.html");
});

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
