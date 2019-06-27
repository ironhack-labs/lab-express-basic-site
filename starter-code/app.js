'use strict'
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', ( request, response ) => {
  response.sendFile(__dirname + '/public/index.html');
}),
app.get('/about', ( request, response ) => {
  response.sendFile(__dirname + '/public/about.html');
}),
app.get('/gallery', ( request, response ) => {
  response.sendFile(__dirname + '/public/photoGallery.html');
}),

app.listen(3000,() => {
  console.log("working");
})