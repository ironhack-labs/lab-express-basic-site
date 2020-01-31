const express = require("express");
const server = express();
const hbs = require("hbs")
const path = require("path");
const port = 4295;



// INITIAL SETUP

server.use(express.static(path.join(__dirname, "public")));

server.set("views", path.join(__dirname, "views"));

server.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views/partials"));

// END OF SETUP
/* ***** */

// ROUTES

server.get("/", (req, res) => {
    const data = {
        definition: " i.e. Street style is a specific fashion style which comes originally from British fashion culture. It is a comprehensive approach to fashion and produces styles which intersect and differ from mainstream fashion considerations.",

        myThoughts: "fashion have always been a way to express oneself but over time, some rules was established by grand figures from this world. street means freedom. a place where no one is enough qualified to give a judgement on anything. which is perfect for those with originality, creativity. street style is a bottomless pit full of unlimited and limitless outfit. inspiration from everyone and for everyone.",
    }

    res.render("home.hbs", data);
})

server.get("/about", (req, res) => {
    const data = {
        bio: "a 25yo boy trying to find a path and go somewhere by learning how to code. i will not say i am passionate about fashion. i just like being late by taking a lot of time to figure out how i am going to dress for each day. it is just a way for me to hide what i want to hide from people - by dressing nicely. asian influence knowing where i am from. clothes with nice and clean cut. enhancing the look by focusing on accessories, hair style, make up - to make some simple looks be more eye-catching.",

        profilPic: "/img/me2.JPG",
    }
    res.render("about.hbs", data);
})

server.get("/gallery", (req, res) => {
    const data = {
        photoSlglf: ["/img/IMG_5662.jpg", "/img/IMG_5663.jpg", "/img/IMG_5664.jpg", "/img/IMG_5665.jpg"],
        photoKmu: ["/img/IMG_5667.jpg","/img/IMG_5668.jpg","/img/IMG_5669.jpg","/img/IMG_5670.jpg"],
        photoChxl: ["/img/IMG_5671.jpg","/img/IMG_5672.jpg","/img/IMG_5673.jpg","/img/IMG_5674.jpg"]
    }
    res.render("gallery.hbs", data);
});



// kickstart
server.listen(port, () => {
    console.log(`@ http://localhost:${port}`)
})