const express = require('express');

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static('views'));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(port,()=>{console.log("looks like it does the job")})