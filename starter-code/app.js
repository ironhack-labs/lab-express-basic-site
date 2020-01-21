const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static("public"));
app.use((req, res, next) => {
  res.locals = {
    home: false,
    about: false,
    photos: false
  };
  next();
});

app.get("/", (req, res) => {
  res.render("home", { home: true });
});
app.get("/about", (req, res) => {
  res.render("about", { about: true });
});
app.get("/photos", (req, res) => {
  res.render("photos", { photos: true });
});

const port = 3000;
app.listen(port, () => console.log(`Ready express on port ${port}`));
