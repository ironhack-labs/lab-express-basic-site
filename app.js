const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Configurar la carpeta de partials
hbs.registerPartials(__dirname + "/views/partials");

app.use("/static", express.static(__dirname + "/public"));

const ta = [
  { name: "Alejandro", edad: 30 },
  { name: "Simon", edad: 30 },
  { name: "Giorgetti", edad: 25 },
  { name: "Diego", edad: 22 }
];

// Variables de plantilla por defecto (como si fuesen variables de plantilla globales)
app.use((req, res, next) => {
  res.locals = {
    tituloPag: "Bienvenido a la pagina de los TA"
  };
  next();
});

app.get("/", (req, res) => {
  res.render("home", { ta });
});

app.get("/correcciones", (req, res) => {
  res.render("correcciones", {
    ta: ta.filter(e => e.name[0] == "A"),
    tituloPag: "CORREC"
  });
});

const port = 5555;
app.listen(port, () => console.log(`Ready on port ${port}`));
