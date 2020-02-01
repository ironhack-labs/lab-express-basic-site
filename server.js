const express = require("express");
const server = express();
const PORT = 7777;
const path = require("path");
const hbs = require("hbs");
// require("dotenv").config();

// / Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax
// indicates express where our "views" templates are located
// view is a term part of MVC design pattern... more coming. in a nutshell, a view is a page ; )
server.set("views", path.join(__dirname, "views"));
// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are others ... pug/jade etc.engine !
// server.use(express.urlencoded({extended:false}));
hbs.registerPartials(path.join(__dirname, "views/partials"));
// what is a view engine ???
// basicaly a way to code HTML++ (loops, conditionals
hbs.registerPartials(path.join(__dirname, "views/partials"));
hbs.registerPartial("navBar", "{{navBar}}");
hbs.registerPartial("footer", "{{footer}}");


server.get(["/", "/home"], (req, res) => {
    const data = {
        firstname: "TA's",
        recipes: [{
            img: "/img/salade-estivale.jpeg",
            title: "Fresh salad"
        },
        {
            img: "/img/crevete.jpeg",
            title: "Pasta with shrimp"
        },
        {
            img: "/img/fruits.jpeg",
            title: "Fresh fruits bowl"
        },
        {
            img: "/img/pates.jpeg",
            title:  "Tomato and basilic pasta"
        },
        {
            img: "/img/brownie.jpeg",
            title: "Typical brownie"
        },
        {
            img: "/img/salade.jpeg",
            title: "Natural vegetable soup"
        }]
    }
    res.render("home", data);
});

server.get("/about", (req, res) => {
    const data = {
        firstname: "TA's",
    }
    res.render("about", data);
});

server.get("/galery", (req, res) => {
    const data = {
        firstname: "TA's",
        recipes: ["/img/fruits.jpeg", "/img/brownie.jpeg", "/img/burger.jpeg",
        "/img/crevete.jpeg", "/img/pates.jpeg", "/img/salade-estivale.jpeg", "/img/salade.jpeg",
        "/img/saumon.jpeg", "/img/pave-boeuf.jpeg", "/img/fraise.jpeg", "/img/barbeuk.jpeg",
        "/img/pizza.jpeg", "/img/pave-boeuf.jpeg", "/img/oeuf.jpeg", "/img/pancake.jpeg","/img/mokka.jpeg"]
    };
    res.render("galery", data);
});



server.listen(PORT, () => {
    console.log(`you are at the address @ http://localhost:${PORT}`);
});
