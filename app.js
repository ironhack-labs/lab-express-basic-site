const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`)

app.get('/', (req, res, next) => {
    res.render('home');
});

app.get('/about', (req, res, next) => {
    const name = 'Carlos'
    res.render('about');
});

app.get('/works', (req, res, next) =>{
    res.render('works');
});

const port = 3000;
app.listen(port, () => console.log(`Aplication ir running at port ${port}`));