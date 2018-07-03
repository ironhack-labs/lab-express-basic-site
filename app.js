const express = require('express');
const app = express();
const path = __dirname;

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  // console.log(reque  st);
  response.sendFile(path + '/views/home.html');
});


app.get('/about-us', (req, res, next) => {
  res.sendFile(path + '/views/about-us.html');
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(path + '/views/gallery.html');
});


app.listen(3000, () => {
  console.log("₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ");
});
