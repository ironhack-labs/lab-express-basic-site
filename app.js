const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    console.log('this is the home page!!');
    
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/mujica', (req, res) => {
    res.sendFile(__dirname + '/views/mujica.html');
});

app.get('/workofmujica', (req, res) => {
    res.sendFile(__dirname + '/views/mujicawork.hmtl');
}); 

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
