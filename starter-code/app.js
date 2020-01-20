const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

const port = 5555;
app.listen(port, () => console.log(`Ready on port ${port}`));
