// 1. Importando o objeto Express para uma variável
const express = require("express");

// 2. Instanciando um novo servidor Express
const app = express();

// 3. Configurando a pasta public para servir conteúdo estático (HTML, CSS, Javascript de cliente, imagens, fontes, etc...)
app.use(express.static("public"));

/* 5. Criar uma rota para lidar com requisições do tipo GET que chegarem no endereço 
 /home */
app.get("/home", (request, response) => {
  const htmlFile1 = `${__dirname}/views/home.html`;

  response.sendFile(htmlFile1);
});

app.get("/about", (request, response) => {
  const htmlFile2 = `${__dirname}/views/about.html`;

  response.sendFile(htmlFile2);
});

app.get("/works", (request, response) => {
  const htmlFile3 = `${__dirname}/views/works.html`;

  response.sendFile(htmlFile3);
});

app.get("/gallery", (request, response) => {
  const htmlFile4 = `${__dirname}/views/gallery.html`;

  response.sendFile(htmlFile4);
});

// 4. Colocar o servidor instanciado pra escutar requisições HTTP em uma porta específica
app.listen(4000, () => console.log("My first app listening on port 4000! "));
