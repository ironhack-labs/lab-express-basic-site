const express = require ("express");
const app = express();

app.get("/", (req, res) => {
    console.log(req.url);
    res.send ("<h1>HOLA MUNDO!</h1>");
})

app.get("/about", (req, res) => {
    console.log(req.url);
    res.send ("<h1>Hola de nuevo!</h1>");
});

app.listen(3030, () => {
    console.log("Ready!!!");
})