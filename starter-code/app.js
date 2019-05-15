// 1.- Requerir Express
const express = require("express");

// 2.- Instanciar Express
const app = express();
const port = 3000;

// 3.- Definir directorio de recursos estáticos
app.use(express.static("public"));

// 4.- Enrutar
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home_page.html");
});

app.get("/cat", (req, res) => {
  res.sendFile(__dirname + "/views/airport_page.html");
});

// 5.- Abrir servidor
app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});
