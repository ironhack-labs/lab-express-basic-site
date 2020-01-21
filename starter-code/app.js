const players = require("./players.js");

const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) =>
  res.render("home", { homeNav: true, homePage: true })
);
app.get("/about", (req, res) => res.render("about", { aboutNav: true }));
app.get("/players", (req, res) =>
  res.render("players", { players, playersNav: true })
);

app.listen(3000);
