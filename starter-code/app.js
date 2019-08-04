const express = require('express');
const app = express();


app.use(express.static('public'))

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (req,res)=>{
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/galery', (req,res)=>{
  res.sendFile(__dirname + '/views/galery.html');
}); 

const PORT = process.env.PORT || 5000;
app.listen(PORT)