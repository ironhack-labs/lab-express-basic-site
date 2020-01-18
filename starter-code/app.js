const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static(__dirname + "/static"));

const dogs = [
  { name: "Kenshi", edad: 11, campeon: "yes" },
  { name: "Kazan", edad: 10 },
  { name: "Kuro", edad: 10 },
  { name: "Nami", edad: 6 },
  { name: "Kun", edad: 8 }
];

app.get("/", (req, res) => {
  res.render("index", { dogs });
});

app.get("/about", (req, res) => {
  res.render("about", { Document: "ABOUT" });
});

app.get("/galery", (req, res) => {
  res.render("galery", { Document: "GALERY" });
});

app.get("/champion", (req, res) => {
  res.render("champion", {
    Document: "CHAMPIONS",
    dogs: dogs.filter(e => e.campeon == "yes")
  });
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
