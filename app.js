const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Configurar la carpeta de partials
hbs.registerPartials(__dirname + "/views/partials");

app.use("/public", express.static(__dirname + "/public"));

const benefits = [
  { name: "Search", description: "Know what you want to listen to? Just search and hit play." },
  { name: "Browse", description: "Check out the latest charts, brand new releases and great playlists for right now." },
  { name: "Discover", description: "Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio." }
];

// Variables de plantilla por defecto (como si fuesen variables de plantilla globales)
app.use((req, res, next) => {
  res.locals = {
    tituloPag: "Bienvenido a la pagina de los TA"
  };
  next();
});

app.get("/", (req, res) => {
  res.render("home", { benefits });
});

app.get("/search", (req, res) => {
  res.render("search", {
    benefits: benefits.filter(e => e.name[0] == "S"),
  });
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
