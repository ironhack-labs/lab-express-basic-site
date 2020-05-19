//Variables
const express = require("express");
const hbs = require("hbs");
const app = express();

// ejecución 
app.listen(5000);

//middleware
app.use(express.static("public"));

//views
app.set('views', __dirname + '/views');

// directorios

// app.get("/", (req, res) => {

//     //res.send("TODO CONECTADO")

//     const infoHome = {
//         nombre: "Robert",
//         ocupation: "Designer"
//     };

//     res.render('home.hbs', infoHome)
// });

app.get("/home", (req, res) => {

    const infoHome = {
        nombre: "Robert",
        ocupation: "Designer"
    };

    res.render('home.hbs', infoHome)
});



app.get("/about", (req, res) => {

    const infoAbout = {
        nombre: "Robert",
        ocupation: "Designer"
    };

    res.render('about.hbs', infoAbout)
});



app.get("/works", (req, res) => {

    const infoWorks = {
        nombre: "Robert",
        ocupation: "Designer"
    };

    res.render('works.hbs', infoWorks)
});



// app.get("/gallery", (req, res) => {

//     // const infoHome = {
//     //     nombre: "Robert",
//     //     ocupation: "Designer"
//     // };

//     res.render("gallery")
// });