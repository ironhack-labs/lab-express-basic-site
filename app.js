//Express requirements
const express = require('express');
const app= express();

//Add Public forlder for static files
app.use(express.static('public'));

//Routes to html
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
  });

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html')
});

app.get('/imagesgallery', (request, response, next) => {
response.sendFile(__dirname + '/views/gallery.html')
});

//Port listener
app.listen(3000, () => console.log('My first app listening on port 3000! '));