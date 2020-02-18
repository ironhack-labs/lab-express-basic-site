const express = require('express');
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/', (req, res) => res.render(`${__dirname}/views/index`));
app.get('/index2', (req, res) => res.render(`${__dirname}/views/index2`));
app.get('/index3', (req, res) => res.render(`${__dirname}/views/index3`));


app.listen(5000);