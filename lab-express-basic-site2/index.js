const express = require('express');


const app = express();
// const hbs = require(`hbs`);
const hbs  = require('express-handlebars');
const path = require('path')

 
 
// app.engine('handlebars', exphbs());
app.engine('.hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layout',
  partialsDir: __dirname + '/views/partials'
}));



// middleware hbs logic
// app.set('view engine', 'hbs');
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');



// load static folder
app.use(express.static(path.join(__dirname, 'public')));
// hbs.registerPartials(__dirname + '/views/patrials');





// home route:
app.get('/', (request, response) => {
  let data = {
    name: "Tatiane",
    bootcamp: "<span>IronHack WebDev</span>"
  };
  response.render('home-page', data);
});

// cat route:
// app.get('/cat', (request, response, next) => {
//   let data = {
//     animal: "Cats",
//     coolAnimal: "<span>fat cats</span>"
//   };
//   response.render('./cat-page', data);
// });

// dog route:
app.get('/about', (request, response, next) => {
  let data = {
    favoriteAnimal: "Dogs",
    coolerAnimal: "<span>fat dogs</span>"
  };
  response.render(`about`, data);
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});