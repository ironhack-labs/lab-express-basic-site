const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


app.use("/static", express.static(__dirname + "/public"));


var cars = [{
    "id": 1,
    "name": "Fiat mMultipla",
    "color": "Dorado",
    "price": "13.222 €",
    "image": "./images/multipla.jpg",
    "description": "Diseño y funcionalidad van de la mano en este coche tan horrendo, lo que tiene de feo lo tiene de incómodo",
    "showDetails": false
  },
  {
    "id": 2,
    "name": "Nissan Cube",
    "color": "Blanco perla",
    "price": "15.222 €",
    "image": "./images/nissan.jpg",
    "description": "Su nombre hace honor a su estética, es feo elevado al cubo :)",
    "showDetails": false
  },
  {
    "id": 3,
    "name": "Pontiac WW",
    "color": "Beige",
    "price": "19.999€",
    "image": "./images/pontiac.jpg",
    "description": "Se salva porque es el coche de Heisenberg.",
    "showDetails": false
  }]
  
  app.get("/", (req, res) => {
    res.render("home", { cars });
  });
  
//   app.get("/correcciones", (req, res) => {
//     res.render("correcciones", {
//       cars: cars.filter(e => e.name[0] == "A"),
//       tituloPag: "CORREC"
//     });
// });
  
  const port = 3000;
  app.listen(port, () => console.log(`Ready on port ${port}`));