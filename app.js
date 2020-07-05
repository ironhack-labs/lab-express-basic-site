require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/about", (req,res) => {
      res.render("about");
  });

  app.get("/products", (req,res) => {
    res.render("products", images);
});

app.get("/newsletter", (req,res) => {
    res.render("newsletter");
});

app.get("/thanks-subscribing", (req,res) => {
    res.render("thanks-subscribing");
});

app.get("/liberty", (req,res) => {
    res.render("liberty");
});

app.get("/jouy", (req,res) => {
    res.render("jouy");
});

app.get("/vichy", (req,res) => {
    res.render("vichy");
});

app.listen(process.env.PORT, function () {
    console.log(`My app is ready to rock @ http://localhost:${process.env.PORT}!`);
  });