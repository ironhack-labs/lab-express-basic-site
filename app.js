const express = require("express");

const app = express();

//Cfg rendering
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res, next) => {
    res.render('home')
})

app.get('/home', (req, res, next) => {
    res.render('home')
})

app.get('/works', (req, res, next) => {
    res.render('works')
})

app.get('/gallery', (req, res, next) => {
    res.render('gallery')
})

const port = 3000;
app.listen(port, () => console.info(`Application running at port ${port}`))