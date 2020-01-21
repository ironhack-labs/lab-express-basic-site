const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use("/static", express.static(__dirname + "/static"));

const dogs = [
  {
    image: "/static/images/kenshi.jpg",
    name: "Kenshi",
    age: 11,
    champion: "campeon",
    owner: "Silvia Ordas"
  },
  {
    image: "/static/images/kazan.jpg",
    name: "Kazan",
    age: 10,
    owner: "David Garcia"
  },
  {
    image: "/static/images/nami.jpg",
    name: "Nami",
    age: 6,
    champion: "campeon",
    owner: "Nerea Alarcon"
  },
  {
    image: "/static/images/kun.jpg",
    name: "Kun",
    age: 8,
    champion: "campeon",
    owner: "Sara Dacal"
  },
  {
    image: "/static/images/Hiro.jpg",
    name: "Hiro",
    age: 11,
    owner: "Carlos Torres"
  },
  {
    image: "/static/images/Sachi.jpg",
    name: "Sachi",
    age: 11,
    owner: "Angels Font"
  }
];

app.get("/", (req, res) => {
  res.render("index", {
    dogs,
    Document: "INDEX",
    headers: "/static/images/Portada.jpg"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    Document: "ABOUT",
    headers: "/static/images/Portada.jpg"
  });
});

app.get("/galery", (req, res) => {
  res.render("galery", {
    dogs,
    Document: "GALERY",
    headers: "/static/images/Portada.jpg"
  });
});

app.get("/champion", (req, res) => {
  res.render("champion", {
    dogs: dogs.filter(e => e.champion),
    Document: "CHAMPIONS",
    headers: "/static/images/Portada.jpg"
  });
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
