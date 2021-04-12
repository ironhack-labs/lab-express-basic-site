const port = 5000;
const express = require("express");
const app = express();

app.use(express.static("public"))

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
  });

  app.get('/paintings', (request, response, next) => {
    response.sendFile(__dirname + '/views/page1.html');
  });

  app.get('/EXHIBITIONS', (request, response, next) => {
    response.sendFile(__dirname + '/views/page2.html');
  });

app.listen(5000, () => console.log('My first app listening on port 3000! '));



