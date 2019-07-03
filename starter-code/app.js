
const express = require('express')
const app = express()
 
app.listen(8000)


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res,next)=>{
    res.sendFile(__dirname + '/views/index.html');
  });

app.get('/about', (req, res,next)=>{
    res.sendFile(__dirname + '/views/about.html');
  });

  app.get('/gallery', (req, res,next)=>{
    res.sendFile(__dirname + '/views/gallery.html');
  });

