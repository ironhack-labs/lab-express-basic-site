console.log('bonjour adele');
const express = require("express");
const hbs = require("hbs");

// generate the default application object
const app = express();

// console.log(__dirname)
// __dirname that returns the absolute path of the current working directory

// STEP 2 => BASIC APP SETUP
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views"); // where are my views ?
app.set("view engine", "hbs"); // what engine will generate the views ?

app.get(["/", "/accueil"], (req, res) => {
    res.render("accueil");
});

app.get("/a-propos", (req, res) => {
    res.render("a-propos");
});

app.get("/clips", (req, res) => {
    res.render("clips");
});

app.get("/digital", (req, res) => {
    res.render("digital");
});

app.get("/documentaires", (req, res) => {
    res.render("documentaires");
});

app.get("*", (req, res) => {
    res.send("Page not found!");
});

app.listen(3000, () => {
    console.log("server is ready to rock @ http://localhost:3000");
}); // this number represents an opened port on your server
// the outside world is allowed to access your app ONLY through opened ports