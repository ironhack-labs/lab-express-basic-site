const express = require ('express'); //pillamos protocolo http
const app = express(); //pillamos el framework express
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
});

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html')
});

app.listen(port, (error) => {
  error ? console.log("LA HAS LIADO",error) : console.log("IT'S ALIVE!! ")
});