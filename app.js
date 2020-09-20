// ENV VARIABLES
require("dotenv").config();

// DATABASE CONNECTION
require("./config/mongodb");

const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(8080, () => {
    console.log(`server is running at http://localhost:8080`);
  });



//BODY PARSER
  app.use(express.urlencoded({ extended: false }));
  // below mandatory to expose the posted data in req.body (async => AJAX)
  app.use(express.json());
  app.use(require("./routes/messageRoute"));
  module.exports = app;
