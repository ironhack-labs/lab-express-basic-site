// express import (remember, previously you have to do npm i express)
const express = require("express");
// app is express instantiated
const app = express();
// web server - port number definition
const PORT = 3000;

app.use(express.static("public"));

app.get("/superHeroHome", (req, res) => {
    res.sendFile(__dirname + "/public/views/static.html");
});
app.get("/superHeroAbout", (req, res) => {
    res.sendFile(__dirname + "/public/views/about.html");
});
app.get("/superHeroGallery", (req, res) => {
    res.sendFile(__dirname + "/public/views/gallery.html");
});


// we spin up the web server to listen to the PORT 3000
app.listen(PORT, () => {
    // after booting up the server, we report this to the executer user
    console.log(`listening on port ${PORT}`);
});
