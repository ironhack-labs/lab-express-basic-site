// 1. Importando o objeto Express para uma variável
const express = require("express");

// 2. Instanciando um novo servidor Express
const app = express();

// 3. Configurando a pasta public para servir conteúdo estático (HTML, CSS, Javascript de cliente, imagens, fontes, etc...)
app.use(express.static("public"));

/* 5. Criar uma rota para lidar com requisições do tipo GET que chegarem no endereço 
 /home */
app.get("/home", (request, response) => {
  const htmlFile = `${__dirname}/views/index.html`;

  response.sendFile(htmlFile);
});

app.get("/about", (request, response) => {
  const htmlAbout = `${__dirname}/views/about.html`;

  response.sendFile(htmlAbout);
});

app.get("/works", (request, response) => {
  const htmlWorks = `${__dirname}/views/works.html`;

  response.sendFile(htmlWorks);
});

// 4. Colocar o servidor instanciado pra escutar requisições HTTP em uma porta específica
app.listen(3000, () => console.log("My first app listening on port 3000! "));
