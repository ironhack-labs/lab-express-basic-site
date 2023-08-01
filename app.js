//Require Express
const express = require('express');

//Creates an Express App (server) that handles requests and responses
const app = express();

//make everything inside directory public available
app.use(express.static('public'));

//Create routes
app.get('/home', (req,res) =>{ //get request is when the client wants something from the server
    res.sendFile(__dirname + "/views/home.html");
});

app.get('/about', (req,res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get('/works', (req,res) => {
    res.sendFile(__dirname + "/views/works.html")
})

app.get('/photo-gallery', (req,res) => {
    res.sendFile(__dirname + "/views/photo-gallery.html")
})

//Start the Server
app.listen(3000, ()=> console.log("Listening in PORT 3000"));

//the route is localhost:3000/home
