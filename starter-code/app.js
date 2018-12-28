const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
  });

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});  


app.get('/photos', (request, response, next) => {
    response.sendFile(__dirname + '/views/photos.html');
    response.sendFile(__dirname + '/public/img/download.png');
});  

app.listen(PORT, () => {
    console.info(`App listening at ${PORT} port`)
});