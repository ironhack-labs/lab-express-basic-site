const express = require("express");
const hbs = require("hbs");

const app = express();

const data = {
  title: "Elon Musk Tribute",
  home: "Home",
  about: "About",
  works: "Works",
  photoGallery: "Gallery",
};

//MIDDLEWARE
app.use(express.static("./public"));
app.set("views", __dirname + "/views");

app.get("/home", (req, res) => {
  res.render("home.hbs", data);
});
app.get("/about", (req, res) => {
  res.render("about.hbs", data);
});
app.get("/works", (req, res) => {
  res.render("works.hbs", data);
});
app.get("/photogallery", (req, res) => {
  res.render("photogallery.hbs", data);
});

app.listen(3000);
