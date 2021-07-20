const express = require("express");
const app = express();

app.get("/", (request, response, next) => response.sendFile(__dirname + '/views/index.html'));

app.listen(3000, () => console.log("Server runs!"));