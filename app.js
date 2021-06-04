const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
    console.log("Welocme on Asif home page.");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
  console.log("Welocme on page which contains info about Asif.");
});

app.get("/work", (request, response) => {
  response.sendFile(__dirname + "/views/work.html");
  console.log("Welocme on page which contains work related info about Asif.");
});

app.listen(3000, () => console.log('yeeeeee, This is my first express server'));