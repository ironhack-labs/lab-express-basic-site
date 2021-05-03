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
  res.render("home.hbs");
});


app.get("/contact", (req, res) => {
  res.render("contact.hbs");
});

// step 4 : app listen to kickstart
app.listen(3000);