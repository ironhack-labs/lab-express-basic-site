// step 1 : require dependencies
const express = require("express");
const hbs = require("hbs");

// step 2 : base setup
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// step 3 : routes handling
app.get("/", (req, res) => {
  res.render("home.hbs", {pageTitle: "Au revoir, Paris !"});
});

app.get("/items", (req, res) => {
  res.render("items.hbs", {pageTitle: "Items"});
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {pageTitle: "About"});
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs", {pageTitle: "Contact"});
});

// step 4 : app listen to kickstart
app.listen(5000);