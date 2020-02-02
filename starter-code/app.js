require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static("./public"));

app.set("views", "./views");

app.set("view engine", "hbs");

hbs.registerPartials("./views/partials");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/portfolio", (req, res) => {
  const data = [
    {
      title: "Money Mario",
      image: "/img/mario.png",
      url: "https://n10t.github.io/money-mario/",
    },
    {
      title: "Cinema CRUD",
      image: "/img/cinema-CRUD.png"
    }
  ];
  res.render("portfolio", {data});
});

app.listen(PORT, () => {
  console.log(`server is ready to rock at http://localhost:${PORT}`);
});
