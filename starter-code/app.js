const express = require('express');
const app = express();

app.use(express.static('public'));

//index
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

//about
app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});

//photo Gallery
app.get('/photos', (req, res, next) => {
  res.sendFile(__dirname + '/views/photoGallery.html')
});

// start the server
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
})


