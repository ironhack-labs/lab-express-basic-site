/*jshint esversion: 6 */
const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Configurar la carpeta de partials
hbs.registerPartials(__dirname + "/views/partials");
app.use("/static", express.static("static"));

const dates = [
  {
    date: "30/10",
    place: "Oh! Valencia",
    city: "Valencia",
    state: "sold out"
  },
  {
    date: "30/10",
    place: "Oh! Valencia",
    city: "Valencia",
    state: "available"
  },
  {
    date: "30/10",
    place: "Oh! Valencia",
    city: "Valencia",
    state: "available"
  },
  {
    date: "30/10",
    place: "Oh! Valencia",
    city: "Valencia",
    state: "available"
  },
  {
    date: "30/10",
    place: "Oh! Valencia",
    city: "Valencia",
    state: "available"
  }
];

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/tour", (req, res, next) => {
  res.render("tour", { dates });
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/bio", (req, res) => {
  res.render("bio");
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
