const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));
app.get('/blackhole', (request, response, next) => response.sendFile(__dirname + '/views/blackhole.html'));
app.get('/wormhole', (request, response, next) => response.sendFile(__dirname + '/views/wormhole.html'));

app.listen(3003);