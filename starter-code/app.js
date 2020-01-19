const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render();
});

const port = 4000;
app.listen(port, () => console.log(`Ready on port ${port}`));
