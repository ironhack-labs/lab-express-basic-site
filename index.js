const express = require("express");
const hbs = require("hbs");
const app = express();
require("dotenv").config();

const imgs = [
  { url: "/img/gallery/orsonwelles.png", 
  legende: "Salut c'est Orson Welles!" },
  {
      url :   "/img/gallery/abitbol.gif",
      legende : "l'homme le plus classe du monde, George Abitbol"
  },
  {
      url : "/img/gallery/pastressympa.gif",
      legende : "le train de tes injures roule sur les rails de mon indifférence"
  },
  {
      url : "/img/gallery/isometric.png",
      legende : "Pose ce bouquin d'exercices"
  },
  {
      url : "/img/gallery/chips.gif",
      legende : "J'suis même content que tu restes"
  },
  {
      url : "/img/gallery/fax.gif",
      legende : "La modernité lui manque"
  },
  {
      url : "/img/gallery/mexicanfood.jpg",
      legende : "Oh un restaurant Mexican food"
  },
  {
      url : "/img/gallery/jusdetomate.gif",
      legende : "Regarde, il est là ! Qui ça, le jus de tomate ?!"
  },
  {
    url: "/img/gallery/julienlepers.gif",
    legende: "Je vais vous poser une question, si vous répondez bien je vous laisse le passage.",
  }

];



//BASIC CONFIG

app.use(express.static(__dirname + "/public"));

//TEMPLATE CONFIG
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//BASIC ROUTING
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
  });
});

app.get("/scenes", (req, res) => {
  res.render("scenes", {
    title: "scenes",
    imgs
  });
});

app.get("/culture", (req, res) => {
  res.render("culture", { title: "culture" });
});

//LOCAL SERVER
app.listen(process.env.PORT, () => {
  console.log(`server is running @ http://localhost:${process.env.PORT}`);
});
