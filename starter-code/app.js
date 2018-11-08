
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');


//Function that allows to compare two statements
hbs.registerHelper('ifCond', function(v1, v2, options) {
  //console.log(v1,v2);
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});


app.get('/', (req, res, next) => {
  let data = {
    //layout: false,
    name: "home",
    home: true
  };
  res.render(data.name, data);
});

app.get('/about', (req, res, next) => {
  let data = {
    name: "about",
    about: true
  };
  res.render(data.name, data);
});

app.get('/gallery', (req, res, next) => {
  let data = {
    name: "gallery",
    gallery: true
  };
  res.render(data.name, data);
});

const port = 3000;
app.listen(port,() => {
  console.log(`Ready on port ${port}`);
})
