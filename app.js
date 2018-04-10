const express = require("express");
const app = express();

// Tell Express to look in the "public/"" folder for Urls
app.use(express.static('public'));

// Route


app.get("/", (request, response, next) => {
    
    response.sendFile (__dirname + "/views/home-page.html");
});

// ---------------------------------------------------------------------------------------

app.get("/biography", (request, response, next) => {
    response.sendFile (__dirname + "/views/biography.html");
});

// ---------------------------------------------------------------------------------------

app.get("/discography", (request, response, next) => {
    response.sendFile (__dirname + "/views/discography.html");
});

// console.log("DIRNAME : " + __dirname);

app.listen(3000, () => {
    console.log("Server ready!");
});