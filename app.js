const express = require('express');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render(`${__dirname}/views/index`));
app.get('/projects', (req, res) => res.render(`${__dirname}/views/projects`));
app.get('/contact', (req, res) => res.render(`${__dirname}/views/contact`));

app.listen(3000);
