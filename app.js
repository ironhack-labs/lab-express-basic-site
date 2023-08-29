const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/home.html");
});

app.get("/work", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/work.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/about.html");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
