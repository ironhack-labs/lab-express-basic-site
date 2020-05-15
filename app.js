const express = require("express");


const app = express();

//MIDDLEWARE
app.use(express.static('public'));
app.set('views', __dirname + '/views');

app.get('/home', (req, res) =>
    res.sendFile(__dirname + '/views/home-page.html'));

app.get('/about', (req, res) =>
    res.sendFile(__dirname + '/views/about-page.html'));

app.get('/works', (req, res) =>
    res.sendFile(__dirname + '/views/works-page.html'));

app.get('/photos', (req, res) =>
    res.sendFile(__dirname + '/views/photos-page.html'));


/*app.get('/works', (req, res) => {
    const datos = {
        nombre: "Maria Luiza",
        escuela: "Escuela de la esquina"
    };

    res.render("holamundo.hbs", datos);
});

app.get('/photogallery', (req, res) => {
    const datos = {
        nombre: "Maria Luiza",
        escuela: "Escuela de la esquina"
    };

    res.render("holamundo.hbs", datos);
});*/

app.listen(3000);