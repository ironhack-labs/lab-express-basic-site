const express = require("express"); // returns a function
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about", {
    album: [
      { titre: "Desobeissance", annee: 2019 },
      { titre: "Interstellaires", annee: 2015 },
      { titre: "Monkey Me", annee: 2012 },
      { titre: "Bleu Noir", annee: 2010 },
      { titre: "Point de suture", annee: 2008 },
    ],
  });
});

app.listen(3000, () => {
  console.log("server is reeady! : http://localhost:3000");
});
