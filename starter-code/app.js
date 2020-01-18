const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));
app.get("/images", (req, res) => res.render("images"));

app.listen(3000, console.log("Listening"));
