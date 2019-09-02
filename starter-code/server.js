const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// Make everything inside of public/ available
app.use(express.static(path.join(__dirname, "public"))); // rock solid cross-OS syntax
// creates an absolute path pointing to a folder called "views"
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");


app.get("/", (req, res) => {
  res.render("home"); // data has to be an object !!!
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.listen(3000, () => {
  console.log("server is up @ http://localhost:3000");
});
