const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });

app.get('/about', (request, response, next) => {
response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/gallery', (request, response, next) => {
response.sendFile(__dirname + '/views/gallery-page.html');
});

app.get('/works', (request, response, next) => {
response.sendFile(__dirname + '/views/works-page.html');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})