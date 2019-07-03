const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// hbs.registerPartial(__dirname + '/views/partials');



app.get('/', (request, response) => {
  response.render('index');
})
app.get('/about', (request, response) => {
  let stuff = {
    img: '/images/three.jpg'
  }
  response.render('about', {thePerson: stuff});
})
app.get('/about/coding', (request, response) => {
  let stuff = {
    name: 'coding',
    img: '/images/one.jpg',
    bio: 'Some hipster description of coding process',
    coding: true
  }
  response.render('about', {thePerson: stuff});
})
app.get('/about/computer', (request, response) => {
  let stuff = {
    name: 'Computer',
    img: '/images/two.jpg',
    bio: 'Some other picture of coding process',
    coding: false
  }
  response.render('about', {thePerson: stuff});
})

app.get('/more', (request, response) => {
  response.render('some-more');
})

app.get('*', function(req, response){
  response.render( '404');
});

app.listen(3000, () => {
  console.log('Mega componental website is up and running at port 3000')
})