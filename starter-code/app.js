const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/about", (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/gallery", (request, response) => {
    response.sendFile(`${__dirname}/views/gallery.html`);
});

app.get("*", (request, response) => {
    response.send('404, no content found');
});

app.listen(3005, () => {
    console.log("listening to the port 3005");
});