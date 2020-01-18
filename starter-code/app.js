const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("index", { Document: "PAGINA PRINCIPAL" });
});

app.get("/about", (req, res) => {
  res.render("about", { Document: "ABOUT" });
});

app.get("/galery", (req, res) => {
  res.render("galery", { Document: "GALERY" });
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
