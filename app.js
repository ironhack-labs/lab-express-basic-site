const express = require("express");
const app = express()
const pathPages = `${__dirname}/views`

app.use(express.static("public"))

app.get("/", (request, response, next) => response.sendFile(`${pathPages}/home.html`));
app.get("/about", (request, response, next) => response.sendFile(`${pathPages}/about.html`));
app.get("/works", (request, response, next) => response.sendFile(`${pathPages}/works.html`));


app.listen(4000,() => console.log('🏃‍ on port 4000 '))