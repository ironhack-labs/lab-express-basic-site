// Requerimiento Express
const express = require("express");
const port = 3000;

// Instancia Express
const app = express();

// Directorio público
app.use(express.static("public"));

// Enrutado
app.get("/", (req, res) => res.sendFile(`${__dirname}/views/home-page.html`));
app.get("/second", (req, res) =>
  res.sendFile(`${__dirname}/views/second-page.html`)
);

// Escucha servidor
app.listen(port, () => console.log(`App escuchando en el puerto ${port}`));
