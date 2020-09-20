const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) =>
res.render("index"));
app.get("/about", (req, res) =>
res.render("about"));
app.get("/skills", (req, res) =>
res.render("skills"));

app.listen(8080, () => {
//    console.log(`Server is running at http://localhost:8080`);
});