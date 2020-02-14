const express = require('express');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render(`${__dirname}/views/index`));
app.get('/projects', (req, res) => {
  const data = {
    name: 'Legis Music',
    desc: 'Website dedicated to Royalty-Free Music',
  };
  res.render(`${__dirname}/views/project-detail`, data);
});

app.get('/contact', (req, res) => res.render(`${__dirname}/views/contact`));

app.listen(5000);
