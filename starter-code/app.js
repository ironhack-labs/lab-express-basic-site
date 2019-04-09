const express = require("express");
const app = express();
const PORT = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})


app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
})

app.use(express.static('public'));


// app.get("/htmlfile", (req, res) => {
//     res.sendFile(__dirname + '/views/file1.html')
// })

// app.get("/about-us", (req, res) => {
//     res.send(`
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Ironhack</title>
// </head>
// <body>
//     <p>${Math.random()}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nulla reiciendis natus numquam odio, vitae eaque nemo facilis quisquam libero sunt deleniti impedit! Neque aut minus autem consequatur, adipisci fuga.</p>
// </body>
// </html>`)
// })

app.listen(PORT, function() {
    console.log(`My first app ${PORT}`);
})