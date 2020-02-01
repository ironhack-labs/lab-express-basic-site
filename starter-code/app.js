const express = require('express');
const server = express();
const PORT = 9950;
const path = require("path")
const hbs = require("hbs")

// setup routes
server.get("/", (HTTPRequest, HTTPResponse) => {
    
    const data = {
        
    };
    
    HTTPResponse.render("home", data);
})

server.get("/about", (HTTPRequest, HTTPResponse) => {
    
    const data = {
        informations : {
        name : "Paul Carillion",
        birthDate: "22/02/1994",
        nationality: "French",
        emailAdress: "pcarillion@yahoo.fr",
        phoneNumber: "0679752486",
        photograph: "",
        }
    }
    
    HTTPResponse.render("about", data)
})

server.get("/portfolio", (HTTPRequest, HTTPResponse) => {
    
    const data = {
    }
    
    HTTPResponse.render("portfolio", data)
})


// kickstart
server.listen(PORT, () => {
    console.log("yay!!!");
    
});


server.use(express.static(path.join(__dirname, "public"))); 
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));
