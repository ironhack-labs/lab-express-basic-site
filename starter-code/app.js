const express = require("express");
const hbs     = require('hbs');
const app     = express();
const path    = require("path");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  let data = {
    title: "Akira Toriyama",
    headerTitle: "Akira Toriyama",
    headerSubtitle: "Creador de sueños"
  };
  res.render("home", data);
});

app.get("/about", (req, res) => {
  let data = {
    title: "Akira Toriyama: Biografía",
    headerTitle: "Biografía",
    headerSubtitle: "Descubre todo sobre su vida"
  };
  res.render("about", data);
});

app.get("/gallery", (req, res) => {
  let data = {
    title: "Akira Toriyama: Galería",
    headerTitle: "Galería",
    headerSubtitle: "Todas sus series"
  };
  res.render("gallery", data);
});



app.listen(3000, () => {
  console.log("Now listening!")
});