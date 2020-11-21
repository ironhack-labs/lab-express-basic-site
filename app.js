const express = require("express");
const app = express()
const pathPages = `${__dirname}/views`

app.get("/", (request, response, next) => response.sendFile(`${pathPages}/intro.html`));
app.get("/page1", (request, response, next) => response.sendFile(`${pathPages}/page1.html`));
app.get("/page2", (request, response, next) => response.sendFile(`${pathPages}/page2.html`));
app.get("/final", (request, response, next) => response.sendFile(`${pathPages}/finalPage.html`))

app.listen(3000)