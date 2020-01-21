const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Configurar la carpeta de partials
hbs.registerPartials(__dirname + "/views/partials");

app.use("/public", express.static(__dirname + "/public"));

/*const ta = [
  { name: "Alejandro", edad: 30 },
  { name: "Simon", edad: 30 },
  { name: "Giorgetti", edad: 25 },
  { name: "Diego", edad: 22 }
];
*/
// Variables de plantilla por defecto (como si fuesen variables de plantilla globales)
// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.hbs');
  });
  
  // Server Started
  app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  });

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));