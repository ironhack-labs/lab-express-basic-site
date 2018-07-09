
const express = require('express');
const app = express();


app.use("/photo-gal", express.static('public'));



app.get('/', (req, res, next) =>  {
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/about-us', (req, res, next) =>  {
    res.sendFile(__dirname + '/views/about-us.html');
});

app.get('/photo-gal', (req, res, next) =>  {
  res.sendFile(__dirname + '/views/photo-gal.html');
});




app.listen(3000, () => {
    console.log('LEBRON JAMES!!!')
  })