const express = require('express');
const hbs = require('hbs');
const app = express();

const datos = {
    title: "Neil deGrasse Tyson",
    home: "Home",
    about: "About",
    work: "Work",
    book1: "/imgs/books/book1.jpg",
    book2: "/imgs/books/book2.jpg",
    book3: "/imgs/books/book3.jpg",
    book4: "/imgs/books/book4.jpg",
    workText: `Tyson has written several books for the general public, including Death by Black Hole and Other Cosmic Quandaries (2006) and The Pluto Files: The Rise and Fall of America's Favorite Planet (2009). 
    After breaking down complex scientific concepts in Astrophysics for People in a Hurry (2017), he followed with a collection of his responses to fans and critics in Letters from an Astrophysicist (2019).`
}

app.use(express.static("./public"));
app.set('views', __dirname + '/views')

app.get("/", (req, res) => { //Crea un listener para el path pasado como primer parametro
    res.render("home.hbs", datos);
});

app.get("/about", (req, res) => {
    res.render("about.hbs",datos)
});

app.get("/work", (req, res) => {
    res.render("work.hbs", datos)
});

app.listen(2500)