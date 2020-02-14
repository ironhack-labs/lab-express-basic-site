var express = require("express");
var app = express();

app.use(express.static('public'));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");


app.get("/", (req, res, next) => res.render("index"));
app.get("/contact", (req, res, next) => res.render("contact"));
app.get("/about-me", (req, res, next) => res.render("about-me"));
app.get("/projects", (req, res, next) => res.render("projects"));


app.listen(3000, function() {
  console.log("Jaime's portfolio in node.js");
});
