const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static(__dirname + "/public"));

// Template vars
app.use((req, res, next) => {
  res.locals = {
    titlePage: "HOME - Express"
  };
  next();
});

const chiefs = [
  {
    name: "Epi",
    job: "CEO (Chief Executive Officer)",
    photo:
      "https://www.teleadhesivo.com/es/img/asy157-png/folder/products-detalle-png/vinilos-infantiles-cabeza-de-epi.png"
  },
  {
    name: "Blas",
    job: "CISO (Chief Information Security Officer)",
    photo:
      "https://www.teleadhesivo.com/es/img/asy165-png/folder/products-detalle-png/vinilos-infantiles-blas-de-barrio-sesamo.png"
  },
  {
    name: "Monstruo de las galletas",
    job: "CTO (Chief Technology Officer)",
    photo: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/9886.png"
  }
];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about", { titlePage: "About - Express", chiefs: chiefs });
});

app.get("/photo-gallery", (req, res) => {
  res.render("photo-gallery", { titlePage: "Gallery - Express" });
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
