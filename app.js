const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/public`));

app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

app.get('/', (req, res) => res.render("index"));
app.get('/about', (req, res) => res.render("about"));
app.get('/works', (req, res) => res.render("works"));
app.get('/photo-gallery', (req, res) => res.render("photo-gallery"));

app.listen(port, () => console.log(`Listening on port ${port}`))