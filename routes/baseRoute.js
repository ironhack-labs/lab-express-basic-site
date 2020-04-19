const express = require("express");
const router = new express.Router();
const livreModel = require("../models/livre")

router.get("/", (request, response) => {
    response.render("index.hbs", {
        styles: ["styles_accueil.css"],
        title: "Wajdi Mouawad - Accueil"
    });
});

router.get("/oeuvre", function (request, response) {
    livreModel.find({}).sort({ annee: 1})
        .then((dbResponse) =>{
            response.render("oeuvre.hbs", {
            livres: dbResponse,
            styles: ["styles_biblio.css"],
            title: "Wajdi Mouawad - Bibliographie",
        });   
        })
        .catch((err) => {
        console.log(err)
    })
    
});

router.get('/biographie', function (request, response) {
    response.render("biographie.hbs", {
        styles: ["styles_bio.css"],
        title: "Wajdi Mouawad - Biographie",
    });
});


module.exports = router;