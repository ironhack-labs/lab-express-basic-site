const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs', 'png');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res, next) => {
    res.render('home', { name: 'Carlos Martin'});
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/works', (req, res, next) => {
    res.render('works');
});

app.listen(port, () => console.info(`Aplicatio runing at port ${port}`));