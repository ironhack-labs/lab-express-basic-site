const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("views", __dirname + "/view");
app.set("view engine", "hbs");

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/skills", (req, res) => res.render("skills"));
app.get("/portfolio", (req, res) => res.render("portfolio"));
app.get("/contact", (req, res) => res.render("contact"));

app.listen(3000, () => console.log("My first app listening on port 3000!"));
