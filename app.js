const express = require("express");
const hbs = require("hbs");
const { dirname } = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "homepage",
    logo: "/image/logo.png",
    image: "/image/psg.jpg",
    manchester: "/image/manchester.png",
    montpellier: "/image/montpellier.png",
    istanbul: "/image/istanbul.png",
    date1: ["Manchester United - Paris-SG", "12.02.2020", "9:00pm"],
    date2: ["Montpellier- Paris-SG", "12.05.2020", "9:00pm"],
    date3: ["Istanbul - Paris-SG", "12.08.2020", "9:00pm"],
    articleImg1: "/image/article_1.jpg",
    articleImg2: "/image/article_2.jpg",
    articleImg3: "/image/article_3.jpg",
    title1: "Veille de match en direct depuis Old Trafford à partir de 18h45",
    title2: "Le programme de la 5e journée de l'UEFA Champions League",
    title3: "Leandro Paredes se confie à PSGTV",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "about page",
    image2: "/image/psg-2.jpg",
    facts: "Facts",
    sumup: [
      "Paris Saint-Germain Football Club or PSG, is a French football club",
      "The club is based in Saint-Germain-en-Laye and Paris.",
      "It's the only football section of Paris Saint-Germain omnisports.",
      "The club joined the first division of France Championship in 1971/1972 and 1974.",
      "The team trains in the Lodge Camp of Saint-Germain-en-Layes.",
    ],
    stadium: "Stadium",
    place: "Parc des Princes",
    manager: "Manager",
    name: "Thomas Tuchel",
    property: "Property",
    name2: "Qatar Sports Investments",
    pdg: "PDG",
    name3: "Nasser al-Khelaïfi",
  });
});

app.listen(3000, () => {
  console.log("server is ready ! http://localhost:3000");
});
