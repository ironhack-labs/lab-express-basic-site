const express = require("express");
const server = express();
const hbs = require("hbs")
const path = require("path");
const PORT = 9900;

// INITIAL SETUP

server.use(express.static(path.join(__dirname, "public")));

server.set("views", path.join(__dirname, "views"));

server.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views/partials"));


server.get("/", (req, res) => {
    const data = {
        legacy: [{
            img: "/img/kobe-bryant-family",
            title: "A part of his family"
        },
        {
            img: "/img/lakers.jpg",
            title: "Lakers Nation"
        },
        {
            img: "/img/dunk.png",
            title: "Famous Dunk"
        },
        
        {
            img: "/img/victory.jpg",
            title: "Game winner"
        },
        {
            img: "/img/champion.jpg",
            title: "NBA Champion"
        },
        {
            img: "/img/MVP.jpg",
            title: "NBA MVP"
        }]
    }
    res.render("home", data);
});

server.get("/about", (req, res) => {
    const data = {
        firstname: "Kobe",
    }
    res.render("about", data);
});

server.get("/galery", (req, res) => {
    const data = {
        legacy: ["/img/kobe-bryant-family.jpg","/img/lakers.jpg", "/img/dunk.png",
         "/img/Victory.jpg", "/img/champion.jpg", "/img/mvp.jpg",
        "/img/teamusa.jpeg", "/img/teamusagold.jpg"]
    };
    res.render("galery", data);
});



server.listen(PORT, () => {
    console.log(`you are at the address @ http://localhost:${PORT}`);
});