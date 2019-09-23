const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (req, res, next) => {
    res.render("home");
})

app.get("/about", (req, res, next) => {
    res.render("about");
})

app.get("/gallery", (req, res, next) => {
    res.render("gallery");
})

app.listen(3000, () => {
    console.log("App running at port 3000")
})