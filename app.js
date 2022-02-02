// requerir Express
const express = require("express");
const path = require("path");

// instanciar la app desde Express
const app = express();
// iniciar motor Hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// set up de recursos estátiticos (public)
app.use(express.static("public"));

// Enrutar (end points)

//home
app.get("/", (req, res) => {
  //console.log("HOLA Adams!");
  res.render("home-page");
});

//about
app.get("/acerca", (req, res) => {
  //console.log("HOLA about!");
  res.render("about-page");
});

//works
app.get("/trabajos", (req, res) => {
  //console.log("HOLA trabajos!");
  res.render("works-page");
});

//gallery
app.get("/galeria", (req, res) => {
  //console.log("HOLA galeria!");
  res.render("gallery-page");
});

// Levantar servidor
app.listen(5005, () => console.log("Server listening on port 5005"));
