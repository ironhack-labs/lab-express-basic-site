const express = require("express");
const app  = express();
const PORT = 3000;

//creamos este app. para poner la carpeta publica y el usuario pueda acceder a los documentos
app.use(express.static('public'))

app.get("/home", (request, response) => response.sendFile(`${__dirname}/views/home.html`))
app.get("/gallery", (request, response) => response.sendFile(`${__dirname}/views/gallery.html`))
app.get("/about", (request, response) => response.sendFile(`${__dirname}/views/about.html`))

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})