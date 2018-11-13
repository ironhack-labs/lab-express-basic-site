const express = require ("express");
// const path = require("path")
const app = express();

app.use(express.static("public"));
//app.get(express.static("public"));

// app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (request, response, next) => {
   // console.log(__dirname)
    response.sendFile(__dirname + '/views/home.html');
  });

  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });

  app.get('/photos', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
  });

app.listen(3000, ()=>{
    console.log("Basic Express Site");
})