/*jshint esversion: 6 */
const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Configurar la carpeta de partials
hbs.registerPartials(__dirname + "/views/partials");
app.use("/static", express.static("static"));

hbs.registerHelper("ifFirst", function(index, options) {
  if (index === 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

const dates = [
  {
    date: "30/10",
    place: "Oh! Valencia",
    city: "Valencia, ES",
    state: "SOLD OUT",
    onsale: false
  },
  {
    date: "03/07",
    place: "Sala The One",
    city: "Alicante, ES",
    state: "GET THE TIQUETS!",
    onsale: true
  },
  {
    date: "03/13",
    place: "Zentral",
    city: "Pamplona, ES",
    state: "GET THE TIQUETS!",
    onsale: true
  },
  {
    date: "03/14 ",
    place: "Santana 27",
    city: "Bilbao, ES",
    state: "GET THE TIQUETS!",
    onsale: true
  },
  {
    date: "03/20",
    place: "Sala Custom",
    city: "Sevilla, ES",
    state: "GET THE TIQUETS!",
    onsale: true
  },
  {
    date: "03/21 ",
    place: "Industrial Coperaq",
    city: "Granada, ES",
    state: "GET THE TIQUETS!",
    onsale: true
  }
];

const srcGallery = [
  {
    src: "/static/img/gallery1.png",
    title: "Bad Gyal en Barcelona."
  },
  {
    src: "/static/img/gallery2.png",
    title: "Bad Gyal en Jamaica."
  },
  {
    src: "/static/img/gallery3.png",
    title: "Bad Gyal en Madrid."
  },
  {
    src: "/static/img/gallery4.png",
    title: "Bad Gyal con Beefy."
  },
  {
    src: "/static/img/gallery5.png",
    title: "Bad Gyal en la Apolo."
  },
  {
    src: "/static/img/gallery6.png",
    title: "Bad Gyal pensando."
  }
];

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/tour", (req, res, next) => {
  res.render("tour", { dates });
});
app.get("/gallery", (req, res) => {
  res.render("gallery", { srcGallery });
});
app.get("/bio", (req, res) => {
  res.render("bio");
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
