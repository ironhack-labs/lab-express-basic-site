const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("index", {tituloPag:'HOME'});
});

app.get("/about", (req, res) => {
  res.render("about", {tituloPag:'ABOUT'});
});

app.get("/gallery", (req, res) => {
  res.render("gallery", {tituloPag:'GALLERY'});
});

const port = 3000;
app.listen(port, () => console.log(`Ready express on port ${port}`));