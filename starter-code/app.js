const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
  });

app.listen(3000,()=>{
    console.log(`server on: localhost:3000`);
})
