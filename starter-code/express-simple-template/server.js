require("dotenv").config();
require("./config/dbconnect");
const express = require("express");
const app = express();
const hbs = require("hbs");
const User = require("./models/user");

//********************************/
// APP CONFIG
//********************************/
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/entreprise", (req, res) => {
  res.render("entreprise");
});

function createUser() {
  User.create({
    firstname: "souhair",
    lastname: "bou",
    age: 23,
    email: "sou@bou.fr",
    pays: "france"
  }).then(res => {
    console.log("user created");
  });
}
createUser();

app.get("/particulier", (req, res) => {
  res.render("userform");
});

app.post("/particulier", (req, res) => {
  res.send("Votre profil a été crée avec succès!");
});
//********************************/
// KICKSTART
//********************************/
app.listen(9998, () => {
  console.log("server is ready to serve content @: http://localhost:9998");
});
