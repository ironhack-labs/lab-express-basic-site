const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
// our first Route

app.get('/', (req, res) => {
  console.log("Home been requested!");
  res.render("index");
});

app.get('/about', (req, res) => {
  console.log("About has been requested!");
  res.render("about");
});

app.get('/gallery', (req, res) => {
  console.log("Gallery has been requested!");
  res.render("gallery");
});

app.listen(3000, () => {
  console.log('Giorgio Started This Server MothaFcka!')
});