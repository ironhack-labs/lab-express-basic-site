//Creación de servidor//
const express = require ("express");

const app = express();

//Configurar Rendering wiews Engine//
app.set ('view engine', 'hbs');
app.set ('views', `${__dirname}/views`);

//Elementos de la página//
app.get ("/", (req, res, next) => {
    res.render ('home');
})

app.get ("/about", (req, res, next) => {
    res.render ('About');
});

app.get("/works", (req, res, next) => {
    res.render ('Works');
})
//Establecer Puerto de navegación//
const port = 3000;
app.listen(port, () => console.info (`Àpplication running at prot ${port}`));