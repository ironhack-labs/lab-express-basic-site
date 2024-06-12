const express = require('express');
const app = express();
const port = 3000;

// Setting the static files directory
app.use(express.static(__dirname));


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
  });

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
  });

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
  });

// to start my server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });