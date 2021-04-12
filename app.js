
const express = requipe('express');
const app = express();

app.use(express.static('public'));

//Routes
app.get('/index', (request, response) => response.sendFile(__dirname + '/views/index.html'));
app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/work', (request, response) => response.sendFile(__dirname + '/views/work.html'))

app.listen(3000, () => console.log('Listening port 3000'));