const express = require('express');
const app = express();
const path = require ("path")

app.use(express.static(__dirname + '/public')); //especificar nombre directorio
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/' ,(request, response) => {
response.render("index");
}); 
app.get('/about' , (request, response) => {
  response.render("about");
})
app.get('/gallery' , (request, response) => {
  response.render("gallery");
})


app.listen(3000, () => {
  console.log("escuchando en el puerto 3000")
});


