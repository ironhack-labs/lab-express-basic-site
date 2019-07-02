const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
})
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
})
app.get('/more', (request, response) => {
  response.sendFile(__dirname + '/views/some-more.html');
})

app.get('*', function(req, response){
  response.sendFile(__dirname + '/views/404.html');
});

app.listen(3000, () => {
  console.log('Mega website is up and running at post 3000')
})