//1 - import framework/libs
const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/book', (req, res) => {
    let data = {
        img: 'img/kundera-lightness.jpg'
    }
    res.render('book', data);
});

app.listen(3000, () => {

})
