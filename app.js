const express = require('express');
const app = express();
app.use(express.static('public'));

// home
  app.get('/', (request, response, next) => {
    console.log( request )
    response.sendFile(__dirname + '/views/index.html');
  });
  
//about
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})

//works
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html')
})

//gallery
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html')
})

//Server started
app.listen(3000, () => {
    console.log('My first app listening on port 3000')
})

