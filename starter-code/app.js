const express = require("express");
const app = express();
const controllers = require("./controllers");

app.use(express.static('public'));

app.get("/", controllers.home);
app.get("/home", controllers.home);
app.get("/about", controllers.about);
app.get("/gallery", controllers.gallery);

app.listen(3000, () => {
    console.log("Escuchando en 3000");
})