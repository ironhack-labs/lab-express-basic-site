const express = require('express');
const app = express();

// Public Folder Connection
app.use(express.static('public'));

// Route
app.get('/', (request, response) => {
  response.sendFile(__dirname + `/views/home.html`);
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + `/views/about.html`);
});

app.get('/photos', (request, response) => {
  response.sendFile(__dirname + `/views/photos.html`);
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});