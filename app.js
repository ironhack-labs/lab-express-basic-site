const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
    console.log(request);
    response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/historia', (request, response, next) => {
    console.log(request);
    response.sendFile(`${__dirname}/views/historia.html`);
});

app.get('/logros', (request, response, next) => {
    console.log(request);
    response.sendFile(`${__dirname}/views/logros.html`);
});

app.listen(3000)