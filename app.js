var express = require('express');
var app = express();

app.use((req,res,next)=>{
  next()
})

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('THERE IS NOTHING HERE, TRY /home')
 });

app.get('/home', function (req, res) {
 res.sendFile(__dirname + '/views/home.html')
}); 

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/views/about.html')
 }); 

app.get('/works', function (req, res) {
  res.sendFile(__dirname + '/views/works.html')
 }); 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});