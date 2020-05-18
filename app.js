const express = require("express");
const app = express();

// Make public directory available
app.use(express.static('public'));
// Set HBS to render HTML
app.set("view engine", "hbs");
// Set an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");

let data = {
    name: "John",
    lastname: "Doe",
    fanpage: "<em> Pikachu fanpage </em>",
    situations: [{
        title: "Working",
        img: "https://pbs.twimg.com/media/C5e2Al2UYAExILo.jpg"
        },
        {
            title: "Cutie",
            img: "https://pm1.narvii.com/6112/232df22578e73fdf24b23bd029e9482b95f5b322_hq.jpg"
        },
        {
            title: "Chilling",
            img: "https://pbs.twimg.com/media/ETcrPWvWkAEb2nv.jpg"
        },
        {
            title: "Messing around",
            img: "https://i.pinimg.com/originals/2f/5a/31/2f5a31f98c176441ccbe61c1eca1282f.png"
        }],
    newuser: false
}

app.get('/', (req, res, next) => {
    // res.sendFile(__dirname + '/views/home-page.html')
    res.render("home-page.hbs",data)
});

app.get('/about', (req, res, next) => {
    // res.sendFile(__dirname + '/views/about-page.html')
    res.render("about-page.hbs")
});

app.get('/works', (req, res, next) => {
    // res.sendFile(__dirname + '/views/works-page.html')
    res.render("works-page.hbs")
});

app.get('/gallery', (req, res, next) => {
    // res.sendFile(__dirname + '/views/gallery-page.html')
    res.render("gallery-page.hbs",data)
});

app.listen(3000);