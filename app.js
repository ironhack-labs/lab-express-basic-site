// Require Express
const express = require('express');

// Create an Express App that handles requests and responses
const app = express();

// Make everything inside directory public available
app.use(express.static('public'));

// Create routes
app.get('/home', (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
});

// Create routes
app.get('/about', (req,res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get('/works', (req,res) => {
    res.sendFile(__dirname + "/views/works.html");
});

// Start the Server
app.listen(3000, () => console.log("Listening in PORT 3000"));