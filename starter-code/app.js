const express = require("express");
const app = express();

// Make everything in the public folder available

app.use(express.static("public"));
app.set("views", __dirname + "/views");

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/ducks", (request, response, next) => {
  response.sendFile(__dirname + "/views/ducks.html");
});

app.get("/chickens", (request, response, next) => {
  response.sendFile(__dirname + "/views/chickens.html");
});

app.listen(3001, () => {
  console.log("Leroooooooy Jenkiiiiiiins!");
});
