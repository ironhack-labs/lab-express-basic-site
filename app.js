const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");


app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res, next) => {
  res.render("index");
});
app.get("/trabajos", (req, res, next) => {
    res.render("trabajos");
  });
  app.get("/fotos", (req, res, next) => {
     const pokemons = [{
        name: "pikachu",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
     },
     {
        name: "charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
     },
     {
        name: "bulbasur",
        image:  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
     },
     {
        name: "squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
     },
     
    ]
    res.render("fotos", { pokemons });
  });
  app.get("/acercade", (req, res, next) => {
    res.render("acercade");
  });
  

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });