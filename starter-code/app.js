const express = require('express');

const app = express();
app.use(express.static('public'));


app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (request, response, next) => {
  response.render('index', { username: 'Christoph', classes: ["Marauder", "Witch", "Trickster", "Scion", "Duelist", "Templar", "Shadow"] })
});

app.get('/about', (request, response, next) => {
  response.render('about')
});

app.get('/photo-gallery', (request, response, next) => {
  response.render('photo-gallery')
});