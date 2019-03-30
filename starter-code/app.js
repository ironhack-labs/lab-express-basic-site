const express = require('express');
const app = express();

app.use(express.static('public'));  

app.get('/galery', (request, response) => {
    response.sendFile(`${__dirname}/views/galery.html`);
});

app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
});

app.get('/index', (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});  

app.listen(3002);

console.log('Rolou!');