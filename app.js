const express = require('express')
const app = express()

// function ourMiddleWare(req, res, next){
//     console.log(__dirname);
//     next();
// }
// app.use(ourMiddleWare);

app.use(express.static('public'));

app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/views/home.html');
  })
  app.get('/about', function (req, res) {
      res.sendFile(__dirname + '/views/about.html');
  })
  app.get('/works', function (req, res) {
      res.sendFile(__dirname + '/views/works.html');
  })
  app.get('/gallery', function (req, res) {
      res.sendFile(__dirname + '/views/gallery.html');
  })

app.listen(5001, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.0.1:5001/');
})