const express = require('express');
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public")); 
//makes everything of this folder public - a new route gets created "automatically"
//creates app.get/index.js
//creates app.get/index.css
// routes are not equally to the filesystem

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

app.get("/views/about.html", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/views/works.html", (request, response) => {
    response.sendFile(__dirname + "/views/works.html");
});

app.get("/views/galery.html", (request, response) => {
    response.sendFile(__dirname + "/views/galery.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})