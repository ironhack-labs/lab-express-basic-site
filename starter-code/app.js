
const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//first route - home page
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

//second route - about page 

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});

//third route - gallery

app.get('/gallery', (request, response, next) => {
  response.render("gallery", { nativeSpeaker: false })
});

//app listen

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

