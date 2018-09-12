const express = require('express');
const hbs = require('hbs');


const app = express();

//declarar donde están las views y el engine de renderización 
app.set('views', __dirname + "/views")
app.set('view engine', "hbs")
app.use(express.static("public"))

hbs.registerPartials(__dirname + "/views/partials")
let data={
  links:[
          {url:"/",text:"Home"},
          {url:"/about",text:"About"},
          {url:"/gallery",text:"Gallery"}
        ],
  photos:[{
      url:"/einstein.jpg",
      alt:"Einstein photo 1"
    },{
      url:"/einstein2.jpg",
      alt:"Einstein photo 2"
    },
    {
      url:"https://media.giphy.com/media/3ohs88j0jPszpGCbYY/giphy.gif",
      alt:"Einstein photo locura"
    }
  ]
}
app.get('/', (req, res, next) => {
  res.render('home', Object.assign({page:"Home"},data))
});


app.get('/about', (req, res, next) => {
  res.render('about',Object.assign({page:"About"},data))
});


app.get('/gallery', (req, res, next) => {
  res.render('gallery',Object.assign({page:"Gallery"},data))
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

// Make everything inside of public/ available
app.use(express.static('public'));