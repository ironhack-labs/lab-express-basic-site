const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

app.get('/about', (request, response, next) => response.json({
    name: "Toni",
    age: 27,
    height: "1.78"
}));
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

app.listen(3000, () => console.log('My first app listening on port 3000!'));
