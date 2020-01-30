const express = require("express");
const server = express();
const hbs = require("hbs");
require("dotenv").config(); 


server.use(express.urlencoded({ extended: true }));
server.use(express.static("./public"));
server.set("views", "./views");
server.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

server.get("/", (req, res) => {
	res.redirect("home");
});

server.get("/home", (req, res) => {
	res.render("home-view");
});

server.get("/about", (req, res) => {
	res.render("about-view");
});

server.get("/contact", (req, res) => {
	res.render("contact-view");
}) ;

server.listen(process.env.PORT, () => {
console.log(`Server is ready to rock at http://localhost:${process.env.PORT}`);
});