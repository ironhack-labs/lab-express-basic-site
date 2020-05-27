const express = require('express')
const app = express()

app.use(ourMiddleWare);
app.use(express.static('public'))
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/home.html')
  })

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
});
    
app.get('/about/:about', function (req, res) {
  res.sendFile(__dirname + '/views/about.html')
  })

  app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000/`);
})