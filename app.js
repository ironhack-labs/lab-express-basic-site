const express = require('express');

const app = express();
const port = 3000;

// app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`app.js listening on port ${port}`));
