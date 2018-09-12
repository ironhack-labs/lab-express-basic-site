const express = require('express'); //this requires express
const app = express(); //express server will handle request and responses

app.use(express.static('public')); //public is now available

app.set('views', __dirname + '/views'); //hbs link
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {   // send views/index.hbs for displaying in the browser
  res.render('home');
});

app.get('/about', (req, res, next) => {   // send views/index.hbs for displaying in the browser
  res.render('about');
});

app.get('/photogallery', (req, res, next) => {   // send views/index.hbs for displaying in the browser
console.log("hola")
//console.log(res)
  let memes = {
    name: [],
    year: [],
    image: 'images/cool-cat.jpg'
  };
  console.log(memes)
  res.render('photogallery', memes);
});





app.listen(3000, () => { //server started
  console.log('Pair programming!')
});