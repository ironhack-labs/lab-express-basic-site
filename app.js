const express = require("express"); // get the most popular node framework
const path = require("path");
const app = express(); // it will return an object
const hbs = require("hbs");
const { json } = require("express");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/sample", (req, res) => {
    res.render("sample", {
        js: ["sample"]
    });
});

app.get("/trilogy", (req, res) => {
	res.render("trilogy");
});

app.get("/eminem", (req, res) => {
	res.render("eminem");
});

app.get("/goodkid", (req, res) => {
	res.render("goodkid");
});

app.get("/kidcudi", (req, res) => {
	res.render("kidcudi");
});

app.get("/kanyewest", (req, res) => {
	res.render("kanyewest");
});

app.listen(8080, () => {
	console.log("server is ready to rock");
});
