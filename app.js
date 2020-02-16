var express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");



app.get("/", (req, res, next) => res.render("index"));
app.get("/contact-me", (req, res, next) => res.render("contact"));
app.get("/mobile-menu", (req, res, next) => res.render("dropdown-menu"));
app.get("/projects", (req, res, next) => res.render("projects"));
app.get("/project-page", (req, res, next) => res.render("project-page"));
app.get("/under-construction", (req, res, next) => res.render("under-construction"));



app.listen(4000, function() {
    console.log("Marta portfolio in node.js");
  });