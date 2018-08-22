const express = require("express");
const app = express();
const path = require("path");

//sets route to public which is why we don't need to use relative paths to link to the css and imgs
app.use(express.static(path.join(__dirname, "../public")));

//HOME ROUTE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

//ABOUT ROUTE
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/about.html"));
});

//GALLERY ROUTE
app.get("/gallery", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/gallery.html"));
});
app.listen(3000);
