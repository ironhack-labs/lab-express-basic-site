const express = require("express");
const app = express();

//static files
app.use(express.static("public"));

//routes

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/portfolio", (request, response) => {
  response.sendFile(__dirname + "/views/portfolio.html");
});

//starting server
app.listen(3000, () => {
  console.log(`server is runing`);
});
