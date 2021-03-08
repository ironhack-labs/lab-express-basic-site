const express = require('express');
//inicializando o meu express
const app = express();

//registrando a rota "/"
app.get('/', (request, response) => {
  console.log(request.url);

  response.sendFile(__dirname + '/views/home.html');
});

//registrar a rota "/about"
app.get('/about', (request, response) => {
  console.log(request.url);

  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  console.log(request.url);

  response.sendFile(__dirname + '/views/works.html');
});

//ligando o servidor na porta 3003
app.listen(3003, () => console.log('Server ligado na porta 3003'));

app.use(express.static('public'));
//então agora no html o caminho da pasta vai ser assim
