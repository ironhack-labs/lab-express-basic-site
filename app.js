const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.set("/", `${__dirname}/views`);

app.get("/", (req, res, next) => {
    res.render("home");
});

app.get("/about", (req, res, next) => {
    res.render("about");
});

app.get("/works", (req, res, next) => {
    res.render("works");
});

const image = "/img/IMG_3320.JPG"
app.get("/galery", (req, res, next) => {
    res.render("galery", { image })
});

const port = 3000;
app.listen(port, () => console.info(`Application running at port ${port}`));