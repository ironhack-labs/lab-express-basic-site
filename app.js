const express = require("express");
const hbs = require("hbs");
const server = express();
const path = require("path")

server.use(express.static(path.join(__dirname, "public")));

server.set("view engine", "hbs"); // Sets the default view engine, here hbs

server.get("/", function (request, response) {
  response.render("index.hbs", {
    name: "Benjamin Hudson Dean, Plastic Arts, nature and wildlife. Pure creation of bas-relief and trompe-l'œil paintings.",
  });
});

server.get("/about", (request, response) => {
  response.render("about.hbs", {
    information:
      "A Franco-American painter artist, Benjamin Hudson Dean was born in Paris where he studied Graphic Arts and Fine Arts. He uses his creativity in many techniques, figurative art, abstract art, TXBRUT, ink, pastel, calligraphy ... but is particularly attached to painting and natural texture effects. Benjamin H. Dean creates in a Paris workshop known as The Hundred (Le Cent) in the 12th arrondissement of Paris.",
    elements: ["Oil paint", "pigments", "branches", "leaves", "tree bark", "soil", "stones"],
  });
});

server.get("/contact", (request, response) => {
  response.render("contact.hbs", {
    information:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti quaerat sit odit suscipit placeat? Ut accusamus impedit quidem mollitia, sed odit sint vitae a fuga explicabo voluptas. Assumenda, rem!",
    creators: ["Sebastien", "William", "Yuval", "Guillaume x2"],
    pets: [
      {
        name: "Fugee",
        type: "Cat",
      },
      {
        name: "Zelda",
        type: "Cat",
      },
      {
        name: "Sharon",
        type: "Cat",
        address: {
          city: "Paris",
        },
      },
    ],
  });
});

server.get("/works", (request, response) => {
  response.render("works.hbs", {
    bouleauxdez: [
      {
        name: "Bouleaux VI (Désenchanté)",
        type: "20 x 120 cm",
      },
    ],
    bison: [
      {
        name: "Bison",
        type: "130 x 162 cm",
      },
    ],
    bouleauxparenf: [
      {
        name: "Bouleaux VII (Parents & Enfants)",
        type: "100 x 200 cm",
      },
    ],
    autruche: [
      {
        name: "Autruche",
        type: "100 x 200 cm",
      },
    ],
  });
});



server.listen(3002, () => {
  console.log("Server running...");
});
