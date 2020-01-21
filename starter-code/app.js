// Require Express
const express = require("express");
const hbs = require("hbs");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// Route views
app.set("views", __dirname + "/views");

// Render with HBS
app.set("view engine", "hbs");

// Route index
app.get("/", (req, res) => {
    res.render("index");
  });

  // Route about
app.get("/about", (req, res) => {
  res.render("about");
});

// Route gallery
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

// Server Started
app.listen(3000);