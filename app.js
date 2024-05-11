const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static("public"));


//añade persona aqui
app.get("/", (req, res) => {
    res.render("index.hbs");
})

app.get('/home', (req, res) =>{         
    res.send('/views/home.html');
});

app.get('/about', (req, res) => {
    res.send('/views/about.html');
})

app.get('/works', (req, res) => {
    res.send('/views/works.html');
});

app.get('/gallery', (req, res) => {
    res.send('/views/gallery.html');
});



app.listen(3000, () => {
    console.log("Server listening...")
})