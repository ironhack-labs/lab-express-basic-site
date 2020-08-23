const express = require('express');

const app = express();
app.use(express.static('public'));

// home route
app.get('/', (request, response, next) => response.sendFile(`${__dirname}/views/index.html`));

// about route:
app.get('/about', (request, response, next) => response.sendFile(`${__dirname}/views/about.html`));

// works route:
app.get('/work', (request, response, next) => response.sendFile(`${__dirname}/views/work.html`));

// photo route:
app.get('/photo', (request, response, next) => response.sendFile(`${__dirname}/views/photo.html`));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
