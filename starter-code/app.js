const express = require("espress");
const app = express();
const PORT = 4100;

app.use(express.static('public'));

app.get("/", (req, res) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get("/about", (req, res) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get("/gallery", (req, res) => {
    response.sendFile(__dirname + '/views/gallery.html')
})

app.Listen.PORT


//nodemon app.js <- always use nodemon if possible and if it installed: npm install -g nodemon