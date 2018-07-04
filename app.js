const express = require('express');
const app = express();



app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.sendFile("index.html");
});


app.get('/AboutMaster',(req,res)=>{
  res.sendFile(__dirname + '/public/aboutMaster.html')
});

app.listen(3000, ()=>{
  console.log("Escuchando en el 3000")
});