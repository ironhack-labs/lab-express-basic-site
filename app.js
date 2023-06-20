const express = require("express");
const app = express();
const path = require("path");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

console.log(__dirname);

// Define routes
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/views/work.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
