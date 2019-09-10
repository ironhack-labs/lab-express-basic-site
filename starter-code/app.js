const express = require("express");
const app = express()
const PORT = 4100

app.use(express.static('public'));

app.get("/index", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(PORT)
console.log(`Listening on port ${PORT}` )


//nodemon app.js <- always use nodemon if possible and if it installed: npm install -g nodemon