const express = require('express');

const app = express();

// Configure rendering views engine
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/about', (req, res, next) => {
    res.render('about');
})

app.get('/', (req, res, next) => {
    res.render('home');
})

app.get('/works', (req, res, next) => {
    res.render('works');
})

app.get('/photogallery', (req, res, next) => {
    res.render('photogallery');
})



const port = 3000;
app.listen(port, () => console.info(`Application running at port ${port}`));