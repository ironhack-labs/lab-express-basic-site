const express = require("express");

const app = express();

app.use(express.static("public")); // refers to the folder where our static files are

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/about", (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/gallery", (request, response) => {
    response.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(3007, () => {
    console.log("Server likening on port: 3007");
});
