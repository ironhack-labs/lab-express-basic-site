const express = require("express");
const hbs = require("hbs");

const server = express();

server.set("view engine", "hbs");

server.get("/", (request, response) => {
    response.render("home.hbs", {
        information:
            "lorem",
        creators: ["lol", "test", "tkt"]
    })
});


server.get("/about"), (request, reponse) => {
    response.render("about.hbs", {
        members: ["Paul", "Marc", "Laura", "JC"],
    })
};


server.get("/gallery"), (request, reponse) => {
    response.render("gallery.hbs", {
        members: ["Paul", "Marc", "Laura", "JC"],
    })
};

server.get("/work"), (request, reponse) => {
    response.render("work.hbs", {

    })
};


server.listen(8000, () => {
    console.log("server running ...");
});