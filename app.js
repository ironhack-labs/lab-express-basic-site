const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//Dirección a página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})
 
//Dirección a about
app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
})

//Dirección a gallery
app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
})
 
app.listen(port, (error) => {
  error ? console.log(error) : console.log('running on 3000') ;
})

