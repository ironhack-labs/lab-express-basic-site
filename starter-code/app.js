const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });

app.get('/songs', (request, response, next) => {
    response.sendFile(__dirname + '/views/songs.html');
  });

app.listen(PORT, () =>{
    console.info(`App listen at ${PORT} port`);
});