// --- require & setings ---

const express = require("express");
const router = express();

const colors = require("colors");

const path = require("path");
console.log(__dirname.blue);
router.use(express.static(path.join(__dirname, "public")));

const hbs = require("hbs");
router.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/views/partials"));

// --- routes ---

router.get("/", (req, res, next) => {
  console.log("|Here in Home page...|".black.bgGreen.italic);
  res.render("index.hbs");
});

router.get("/about", (req, res, next) => {
  console.log("|Here in About page...|".black.bgGreen.italic);
  res.render("about");
});

router.get("/work", (req, res, next) => {
  console.log("|Here in Work page...|".black.bgGreen.italic);
  res.render("work");
});

// --- server ---

router.listen(3000, () => {
  console.log(
    "|*** Server connected. Now listening on http://localhost:3000 ***|".black
      .bgYellow.italic
  );
});
