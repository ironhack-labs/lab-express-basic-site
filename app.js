const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));
app.get("/works", (req, res) => res.render("works"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
