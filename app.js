
const express = require('express');
const app = express();
app.use(express.static('public'));

// Routes

//GET Route - expecting GET request
app.get('/Home', (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + '/public/views/Home.html');
});

app.get('/About', (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + '/public/views/About.html');
});

app.get('/Works', (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + '/public/views/Works.html');
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});