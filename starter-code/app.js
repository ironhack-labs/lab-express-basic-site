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
    owner: "Sara Dacal"
  }
];

app.get("/", (req, res) => {
  res.render("index", { dogs, Document: "INDEX", headers: "Administradores" });
});

app.get("/about", (req, res) => {
  res.render("about", { Document: "ABOUT", headers: "Acerca del Shiba Inu" });
});

app.get("/galery", (req, res) => {
  res.render("galery", {
    dogs,
    Document: "GALERY",
    headers: "Galeria de Imagenes"
  });
});

app.get("/champion", (req, res) => {
  res.render("champion", {
    dogs: dogs.filter(e => e.champion),
    Document: "CHAMPIONS",
    headers: "Campeones de España"
  });
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
