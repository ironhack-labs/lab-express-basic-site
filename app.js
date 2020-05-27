const express = require('express')
const app = express()

app.set('view engine', 'hbs');
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render(__dirname + '/views/home.hbs', {ip: req.ip})
  }) 
app.get('/about', function (req, res) {
    res.render(__dirname + '/views/about.hbs', {ip: req.ip})
  }) 
app.get('/works/:left?', function (req, res) {
    const left = Number(req.params.left) || 1;
    res.render(__dirname + '/views/works.hbs', {ip: req.ip, left: 500-left*10, nextLeft: left-1, nextRight: left+1})
  })
app.use(function(req, res, next) {
   res.status(404).send('Sorry, page not found.. Blame our developer')
})
 
app.listen(8081)