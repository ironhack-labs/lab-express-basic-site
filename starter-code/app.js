const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res) => {
 res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about',(req,res) => {
  res.sendFile(__dirname + '/views/about.html');
 });

 app.get('/gallery',(req,res) => {
  res.sendFile(__dirname + '/views/gallery.html');
 });

app.listen(3000,() => console.log('Oie! Estou rodando!'));