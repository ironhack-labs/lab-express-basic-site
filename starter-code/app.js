const express = require('express');
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.render("home")
})
app.get("/about", (req, res) => {
  res.render("about")
})
app.get("/photos", (req, res) => {
  res.render("photos")
})

const port = 3000;
app.listen(port, () => console.log(`Ready express on port ${port}`))
