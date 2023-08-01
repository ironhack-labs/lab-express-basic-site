// Require Express
const express = require('express');

// Creates an Express App
const app = express();

// Make everything inside directory public available
app.use(express.static('public'));

// Create routes
app.get('/home', (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get('/about', (req,res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get('/works', (req,res) => {
    res.sendFile(__dirname + "/views/works.html")
});

app.get('/gallery', (req,res) => {
    res.sendFile(__dirname + "/views/gallery.html")
});

// Start the Server
app.listen(3000, () => console.log("Listening on PORT 3000"));