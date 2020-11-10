const express = require("express");
const app = express();

// Middleware
app.use(express.static("public"));

// Routes
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

// Start server
app.listen(3000, () => {
  console.log("server is running in port 3000");
});
