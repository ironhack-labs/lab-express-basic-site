// // Require Express
// const express = require('express');

// // Express server handling requests and responses
// const app = express();

// // our first Route:
// app.get('/', (request, response, next) => {
//   response.send('<h1>Welcome Ironhacker David. :)</h1>');
// });

// // Server Started
// app.listen(3000, () => {
//   console.log('My first app listening on port 3000!');
// });




const express = require("express");

// cree el servidor de express
const app = express();

// config express
app.use(express.static(__dirname + "/public"));

// rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/cat", (req, res) => {
  res.sendFile(__dirname + "/views/cat.html");
});

app.get("/cat3", (req, res) => {
    res.sendFile(__dirname + "/views/cat3.html");
  });
  

// echamos a andar el servidor
app.listen(3000, () => {
  console.log(`Running on http://localhost:3000`);
});