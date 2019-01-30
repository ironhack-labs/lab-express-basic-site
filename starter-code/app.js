const express = require('express');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static('assets'));

app.get('/', (req, res) => res.render('index', {title: "Home"}));
app.get('/about', (req, res) => res.render('about', {title: "About"}));
app.get('/gallery', (req, res) => res.render('gallery', {title: "Gallery"}));
  
  
  
  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  
