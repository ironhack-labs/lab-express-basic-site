const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.set("view engine", hbs);

hbs.registerPartials(path.join(__dirname, 'views/partials'));

server.get("/", (request, response) => {
    const data={
       title: ["HOME"]
    }

    response.render("home.hbs", data);
})

server.get("/about", (request, response) => {
    const data={
        title: ["ABOUT"]
     }
 
    response.render("about.hbs", data);
});

server.get("/works", (request, response)=> {
    const data={
        title: ["WORKS"]
     };
    response.render("works.hbs", data);
});

server.get("/bio", (request, response) => {
    const data={
        title: ["BIO"]
     }
    response.render("bio.hbs", data);
})



server.listen(3002, () => {
    console.log("server runing...");
});