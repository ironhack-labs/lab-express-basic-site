const express   = require("express");
const hbs       = require("hbs");
const app       = express();
// const path      = require("path");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res, next) => res.render("index", {js:["index"]}));

app.get("/home", (req, res, next) => res.render("home",));

app.get("/about", (req, res, next) => res.render("about", {js:["index"]}));

app.listen(8080);