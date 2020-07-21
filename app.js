const express = require("express");

const app = express();


// le decimos a express que sirva los archivos estáticos desde esta carpeta public
app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/home.html')
});

app.get("/about", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/about.html');
});

app.get("/work", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/work.html');
});

app.get("/photogallery", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/photogallery.html');
});

const port = 3000;

app.listen(3000, () => {
  console.log(`App listening on port ${port}`);
});
