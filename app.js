const express = require("express");
const app = express();

// Start Server
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

//Middleware
app.use(express.static("public"));

//Routes
app.get("/", (req, res, next) => {
  //res.send("<h1>Homepage</h1>");
  res.sendFile(__dirname + "/public/views/index.html");
});
app.get("/about", (req, res, next) => {
  res.send("<h1>About</h1>");
});
app.get("/works", (req, res, next) => {
  res.send("<h1>Works</h1>");
});
app.get("/gallery", (req, res, next) => {
  res.sendFile("<h1>Gallery</h1>");
});
