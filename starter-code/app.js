const express = require("express");
const app = express();
const PORT = 3000


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get("/public/main.css", (req, res) => {
    res.sendFile(__dirname + '/public/main.css')
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
})

// app.use(express.static('public'));


// app.use(express.static(__dirname + '/public'));


// app.get("/public/images/img_forest.jpeg", (req, res) => {
//     res.sendFile(__dirname + '/public/images/img_forest.jpeg')
// })

// app.get("/public/images/img_5terre.jpeg", (req, res) => {
//     res.sendFile(__dirname + '/public/images/img_5terre.jpeg')
// })

// app.get("/public/images/img_lights.jpeg", (req, res) => {
//     res.sendFile(__dirname + '/public/images/img_lights.jpeg')
// })


app.listen(PORT, function () {
    console.log(`I am listening on port ${PORT}`);
})