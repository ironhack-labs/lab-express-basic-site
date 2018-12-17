const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express();



app.use( express.static(__dirname + '/public'))

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});


app.listen(PORT, () => {
  console.info(`App listen ar ${PORT} port`);
});
