// ===============
// - BASIC SETUP
// ===============

require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const app = express();

// ===============
// - SERVER INIT
// ===============

app.use(express.static("./public"));
app.use(express.urlencoded({extended: false}));
app.set("views", "./views");
app.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

// ===============
// - BASIC SETUP
// ===============

app.get("/", (req, res) =>{
    res.render("home");
});

app.use(require("./routes/router"));

// ===============
// - KICKSTART
// ===============

app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`);
});