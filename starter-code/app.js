// express import (remember, previously you have to do npm i express)
const express = require("express");
// app is express instantiated
const app = express();
// web server - port number definition
const PORT = 4000;

app.use(express.static("public"));

app.get("/home", (req, response) => {
    // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
    response.sendFile(__dirname + '/views/index.html');
});
app.get("/about", (req, response) => {
    // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
    response.sendFile(__dirname + '/views/about.html');
});

app.get("/gallery", (req, response) => {
    // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
    response.sendFile(__dirname + '/views/gallery.html');
});



// we spin up the web server to listen to the PORT 3000
app.listen(PORT, () => {
    // after booting up the server, we report this to the executer user
    console.log(`listening on port ${PORT}`);
});