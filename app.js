const express = require('express');

const app = express();

app.use(express.static('public'));
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');

})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');

})

app.get('/figuras', (request, response, next) => {
    response.sendFile(__dirname + '/views/figuras.html');

})


app.listen(3000, () => {
  console.log('App running on port 3000');
});
