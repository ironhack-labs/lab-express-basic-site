const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => res.render("index"));
app.get("/educacion", (req, res) => res.render("educacion"));
app.get("/experiencia", (req, res) => res.render("experiencia"));
app.get("/proyectos", (req, res) => res.render("proyectos"));
app.get("/contacto", (req, res) => res.render("contacto"));

app.listen(port, () => console.log(`Listening on port ${port}!`));
