const express = require("express");
const server = express();
const PORT = 9999;
const path = require("path");
const hbs = require("hbs");

server.use(express.static("./public")); // rock solid syntax
server.set("views", "./views");
server.set("view engine", "hbs"); 
hbs.registerPartials("./views/partials");

server.use(express.urlencoded({extended: false}));
server.use(express.json());
     
server.get("/", (HTTPRequest , HTTPResponse ) => {
   const data = {
        montruc : "Franck Treboit - atomisation.net - home",
        css: ["home.css", "global.css"] ,
        js: ["home.js", "global.js"] ,
        myPart: "myPart.hbs" ,
   };
   HTTPResponse.render("home", data); //data must be an object
});

server.get("/atom", (HTTPRequest , HTTPResponse ) => {
   const data = {
        montruc : "Franck Treboit - atomisation.net - images",
        css: ["atom.css", "global.css"] ,
        js: ["atom.js", "global.js"] ,
   };   
   HTTPResponse.render("atom", data); //data must be an object
});

server.get("/contact", (HTTPRequest , HTTPResponse ) => {
   const data = {
        montruc : "Franck Treboit - atomisation.net - contact",
        css: ["contact.css", "global.css"] ,
        js: ["contact.js", "global.js"] ,
    };
   
   HTTPResponse.render("contact", data); //data must be an object
});

server.listen (PORT, () => {
    console.log(`hello the server is listening port Franck on: ${PORT}`);    
});
