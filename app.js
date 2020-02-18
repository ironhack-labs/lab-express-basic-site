const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/index', (req, res) => res.render(`index`));
app.get('/about', (req, res) => res.render(`about`));
app.get('/projects', (req, res) => res.render(`projects`));
app.get('/contact', (req, res) => res.render(`contact`));


app.listen(port, () => console.log('run')); 