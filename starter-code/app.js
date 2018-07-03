const express = require('express');

const app = express();


app.use(express.static('public'));

//our first route
app.get('/', (req, res, next) => {

  console.log(req);

  res.sendFile(__dirname + '/Views/home.html');
})

app.get('/About', (req, res, next) => {

  console.log(req);

  res.sendFile(__dirname + '/Views/About.html')
});

app.get('/gallery', (req, res, next) => {

  console.log(req);

  res.sendFile(__dirname + '/Views/gallery.html')
});

app.listen(3000, () => {
  console.log("Larry David About Me On Port 3000");
})