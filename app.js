// npm init -y

// npm i express

// npm i handlebars
// npm i hbs

// npm i nodemon

// hemos creado las carpetas public y views

//levantamos el server

const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static("public")); //directorio de los  recursos estaticos
app.set("view engine", "hbs"); //view engine HBS

app.get("/", (req, res) => {
  res.render("index-page");
});

app.get("/bibliography", (req, res) => {
  res.render("bibliografia");
});

app.get("/biography", (req, res) => {
  res.render("biografia", { name: "Sanderson" });
});

app.get("/gallery", (req, res) => {
  res.render("galeria");
});

app.listen(5005, () => console.log("SERVER ON"));
