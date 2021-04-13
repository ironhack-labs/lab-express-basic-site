const express = require('express');
const app = express();

app.use(express.static('public'));//Especifica que tots els erxius exteriors es carregaran desde la carpeta public


//Routes
app.get('/', (request, response) => response.sendFile(__dirname + '/views/index.html'));
app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/work', (request, response) => response.sendFile(__dirname + '/views/work.html'))

app.listen(3000, () => console.log('Listening port 3000'));