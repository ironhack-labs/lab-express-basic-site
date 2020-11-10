const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/About.html", (request, response) => {
  response.sendFile(__dirname + "/views/About.html");
});

app.get("/index.html", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/works.html", (request, response) => {
  response.sendFile(__dirname + "/views/Works.html");
});

app.listen(3001, () => {
  console.log("LISTENING ON PORT 3001");
});
