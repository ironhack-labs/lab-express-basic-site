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
  
app.get('/photos', function (req, res) {
    res.sendFile(__dirname + '/views/photos.html')
})
  
app.get('/works', function (req, res) {
    res.sendFile(__dirname + '/views/works.html')
})
  
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/views/pageNotFound.html');
// });
 
app.listen(3000)