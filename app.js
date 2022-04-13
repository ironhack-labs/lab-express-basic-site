const express = require('express');

const hbs = require('hbs');
const path = require('path');

const app = express();


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {

    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/work', (req, res) => {
    res.render('work')
});

app.get('/gallery', (req, res) => {
    res.render('gallery')
});

app.listen(3000, () => console.log('running on port 3000'));