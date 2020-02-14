const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => 
    response.sendFile(__dirname + '/views/index.html'));

app.get('/projects', (request, response) => 
    response.sendFile(__dirname + '/views/projects.html'));

app.get('/contact', (request, response) => 
    response.sendFile(__dirname + '/views/contact.html'));

app.listen(3000, () => console.log('app listening on port 3000'));