
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path = require('path');


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/home', (req, res, next) => {
  res.render('home');
});

app.get('/experience', (req, res, next) => {
  res.render('experience');
});

app.get('/education', (req, res, next) => {
  res.render('education');
});


// app.get('/experience', (req, res, next) => {
//     res.render('experience.hbs');
// });



// app.get('/education', (req, res, next) => {
//     res.render('education.hbs');
// });


// app.get('/softskills', (req, res, next) => {
//     res.render('sofSkills.hbs');
// });



app.listen(3002);