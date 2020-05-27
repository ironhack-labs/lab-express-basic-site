

const express = require('express')
const app = express()

function ourMiddleWare(req, res, next) {
    next();
  }
  
  app.use(ourMiddleWare);
  app.use(express.static('public'))
  
  app.get('/', function (req, res) {
      res.sendFile(__dirname + '/views/home.html')
  })
  
  app.get('/about', function (req, res) {
      res.sendFile(__dirname + '/views/about.html')
  })
  
  app.get('/pic', function (req, res) {
      res.sendFile(__dirname + '/views/pic.html')
  })
  
  app.get('/work', function (req, res) {
      res.sendFile(__dirname + '/views/work.html')
  })
   

app.listen(3008, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3008/`);
})