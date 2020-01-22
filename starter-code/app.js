const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use("/public", express.static(__dirname + "/public"));

const club = [
  {
    image: "/public/images/golden.jpg",
    name: "Golden state Warrios",
    city: "San francisco",
    champion: "campeon",
    rings: 5
  },
  {
    image: "/public/images/lakers.jpg",
    name: "Los Angeles Lakers",
    city: "California",
    champion: "campeon",
    rings: 16
  },
  {
    image: "/public/images/miami.png",
    name: "Miami heat",
    city: "Miami",
    champion: "campeon",
    rings: 3
  },
  {
    image: "/public/images/raptors2.jpg",
    name: "Toronto Raptors",
    city: "Toronto",
    champion: "campeon",
    rings: 1
  },
  {
    image: "/public/images/memphis.jpg",
    name: "Memphis grizzlies",
    city: "Memphis",
    rings: 0
  },
  {
    image: "/public/images/orlando.png",
    name: "Orlando Magic",
    city: "Orlando",
    rings: 0
  }
];

app.get("/", (req, res) => {
  res.render("home", {
    club,
    Document: "HOME",
    headers: "/public/images/todas.jpg"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    Document: "ABOUT",
    headers: "/public/images/todas.jpg"
  });
});

app.get("/galery", (req, res) => {
  res.render("galery", {
    club,
    Document: "GALERY",
    headers: "/public/images/todas.jpg"
  });
});

app.get("/winners", (req, res) => {
  res.render("winners", {
    club: club.filter(e => e.champion),
    Document: "WINNERS",
    headers: "/public/images/todas.jpg"
  });
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
