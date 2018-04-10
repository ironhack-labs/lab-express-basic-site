const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/views/home.html');
  
});

app.get('/about', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/views/about.html');
  
});

app.get('/gallery', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/views/gallery.html');
  
});


app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});