const express = require('express');
const app = express();

app.use(express.static('public'));


// app.get required for each page on the site, provides instructions like navigation.
// res.sendFile(_dirname + '/path for page to direct to)
// other instructions can be included here as well.
app.get('/', (req, res, next)=>{
  res.sendFile(__dirname + '/views/home-page.html');
   
});

app.get('/about', (req, res, next)=>{
  res.sendFile(__dirname + '/views/about.html');
  
});

app.get('/gallery', (req, res, next)=>{
  res.sendFile(__dirname + '/views/gallery.html');

})

// tag the server to test site port 3000 write this on terminal inside the folder to activate the server (nodemon app js)
app.listen(3000, ()=>{

})