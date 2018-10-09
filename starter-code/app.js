'use strict'

const http = require('http');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('public/images'));
app.use(express.static('public/audio'));

// const server = http.createServer((request, response) => {
//   // response.write('Hello, world!');
//   response.end();
// });

const server = http.createServer();

// server.listen(port);
app.listen(port, (error) => {
  error ? console.log(error) : console.log('Todo ok') ;
})
// server.listen(port,'localhost',() => {
//   console.log(`Server up at port ${port}`);
// });

app.get('/', (req, res) => {
  // res.send('Jur');
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html');
});




