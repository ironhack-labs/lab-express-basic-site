const express = require("express");
const hbs = require("hbs");

const app = express();

// SETUP
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


// ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
})

app.get("/movies", (req, res) => {
  res.render("movies");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("*", (req, res) => {
  res.send("Sorry, this page doesn't exist!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000 !");
})