const express = require('express');


// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('../starter-code/public'));

app.get('/',(req, res, next)=>{  
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about',(req,res,next) =>{
  res.sendFile(__dirname + '/views/about.html');
})

app.get('/gallery',(req,res,next) =>{
  res.sendFile(__dirname + '/views/photo-gallery.html')
})


// Server Started
app.listen(5000, () => {
  console.log('My first app listening on port 5000!');
});