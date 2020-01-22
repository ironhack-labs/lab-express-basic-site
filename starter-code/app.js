const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Indico que todas las páginas Static están en public

app.use("/static", express.static("public"));

// Functions

let caracoles = [
  {
    name: "../static/caracol_1.jpg",
    image: "Caracol Gigante Africano",
    type: "Terrestre"
  },

  {
    name: "../static/caracol_2.jpg",
    image: "Caracol Moro",
    type: "Terrestre"
  },

  {
    name: "../static/caracol_3.jpg",
    image: "Caracol Turco",
    type: "Terrestre"
  },

  {
    name: "../static/caracol_4.jpg",
    image: "Caracol Romano",
    type: "Terrestre"
  },

  {
    name: "../static/caracol_5.jpg",
    image: "Alvania Cancellata",
    type: "Acuático"
  },

  {
    name: "../static/caracol_6.jpg",
    image: "Alvania Carinata",
    type: "Acuático"
  }
];

// Indico las diferentes páginas

app.get("/", (request, response) => {
  response.render("home", { document: "Home" });
});

app.get("/about", (request, response) => {
  response.render("about", {
    document: "About",
    caracoles
    //caracoles: caracoles.filter(a => a.type == "Acuático")
  });
});

app.get("/gallery", (request, response) => {
  response.render("gallery", { document: "Gallery" });
});

// Arranca Servidor
const port = 3000;
app.listen(port, () => console.log(`Ok express!`));
