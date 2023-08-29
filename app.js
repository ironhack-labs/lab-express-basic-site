const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/', (request, response, next) => response.sendFile(__dirname + '/public/views/home.html'))
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/public/views/about.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/public/views/works.html'));


const PORT = 3000;
    app.listen(3000, () => console.log('My first app listening on port 3000!'));
