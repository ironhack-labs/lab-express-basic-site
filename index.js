const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));
hbs.registerPartials(__dirname + "/views/partials");


app.get("/", (req, res) => {

  res.render("home", {
    css: ["index", "home"],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    css: ["index", "about"],
  });
});


app.get("/collections", (req, res) => {
  res.render("collections", {
    css: ["index", "collections"],
    js: ["collections"],
  });
});

app.get("/contact", (req, res) => {
  res.render("contact",  {
    css: ["index", "contact"],
  });
});

app.get("/services", (req, res) => {
  res.render("services",  {
    css: ["index", "services"],
  });
});

app.listen(8888, () => {
  console.log(`server is running at http://localhost:8888`);
});