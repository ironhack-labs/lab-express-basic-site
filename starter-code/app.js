const express = require("express") //Es la liga hacia la libreria

const app = express();
app.use(express.static("public")); //Esto dice que existe una carpeta que tiene contenido estatico


app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/index.html');
});

// cat route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/about.html'); //dirname es una variable de ambiente
});
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/public/gallery.html'); //dirname es una variable de ambiente
});
app.listen(3000,()=> {
  console.log("My first app listening on port 3000")
});