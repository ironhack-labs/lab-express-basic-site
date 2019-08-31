const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname + "/views/partials"));

const collections = [
  {
    id: "vacancesalamer",
    title: "Hollidays by the sea",
    print: [
      {
        name: "Swimming",
        img: [
          "/img/labaignade-collection.jpg",
          "/img/labaignade-2-collection.jpg"
        ]
      },
      {
        name: "Cabins",
        img: [
          "/img/lescabanons-2-collection.jpg",
          "/img/lescabanons-collection.jpg"
        ]
      },
      {
        name: "Beach balls",
        img: [
          "/img/lesballons-collection.jpg",
          "/img/lesballons-2-collection.jpg"
        ]
      },
      {
        name: "Parasols",
        img: [
          "/img/lesparasols-2-collection.jpg",
          "/img/lesparasols-collection.jpg"
        ]
      }
    ]
  },
  {
    id: "jardindenfance",
    title: "Garden Party",
    print: [
      {
        name: "Hydrangeas",
        img: [
          "/img/leshortensias-collection.jpg",
          "/img/leshortensias-2-collection.jpg"
        ]
      },
      {
        name: "Roses",
        img: [
          "/img/lesrosiers-collection.jpg",
          "/img/lesrosiers-2-collection.jpg"
        ]
      }
    ]
  },
  {
    id: "pluietropicale",
    title: "Tropical jungle",
    print: [
      {
        name: "Tropical rain",
        img: ["/img/tropical-collection.jpg", "/img/tropical-2-collection.jpg"]
      }
    ]
  },
  {
    id: "potionmaster",
    title: "Potion Master",
    print: [
      {
        name: "Hogwarts houses",
        img: [
          "/img/potionmaster-collection.jpg",
          "/img/potionmaster-2-collection.jpg"
        ]
      },
      {
        name: "Gryffindor & Slytherin",
        img: ["/img/gryffindor-collection.jpg", "/img/slytherin-collection.jpg"]
      },
      {
        name: "Ravenclaw & Hufflepuff",
        img: ["/img/ravenclaw-collection.jpg", "/img/hufflepuff-collection.jpg"]
      }
    ]
  }
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", { collections });
});

app.get("/illustration", (req, res) => {
  res.render("illustration");
});

app.get("/collection:id", (req, res) => {
  const foundCollection = collections.filter(
    collection => collection.id === req.params.id
  )[0];
  res.render("collection", { collection: foundCollection });
});

let listener = app.listen(5000, () => {
  console.log(`server is up @ http://localhost:${listener.address().port}`);
});
