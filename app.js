const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home.hbs", {
      title: "Home Secret Society Of Cats"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs",
   {
      name: "Aurelie",
      hobby : "my cat",
      catName: "Platon",
      title: "About The Cat Servante"
  });
});

app.get("/history", (req, res) => {
  res.render("history.hbs", {
      title : "Cat history"
  });
});

app.get("/photogallery", (req, res) => {
  res.render("photogallery.hbs", {
      title : "Mighty Cats Hall Of Fame",
      imgFolder:"/public/assets/img",
      img:['catamityJane','catbrahamsLincoln', 'catothep', 'Neko', 'catspear' ]
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
