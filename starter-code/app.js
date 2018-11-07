// Setup (configuration of your app)
//-----------------------------------------------------------------------------------
//###################################################################################



// include the "express" npm package in this programconst express = require("express")
const express = require("express")
// "app" variable represents out application and its settings
// (all configuration and content will be defined through "app")

const app = express();
// the listen() method enables our program to accept connections from clients
// ( the arrow function will run when the server is ready for connections)
app.listen(3000, () => {
    console.log("Our server is ready!");
});

// Connect the "public/" folder to our Express app
// (makes files inside "public/" available through our server's domain)
app.use(express.static(__dirname + "/public"));
// ("__dirname" is a "directory name" - the folder where this file is located)





// Routes (Content for your app)
//-----------------------------------------------------------------------------------
//###################################################################################
// Express Route - defines a page of content on the website
// 2 ARGUEMENTS : URL and an arrow fonction that defines the content 
app.get("/",(request, response, next) => {
// "response" controls what clients will get when they visit this route
    response.sendFile(__dirname + "/views/home-page.html");
    // ("__dirname" is "directory name" - the folder where this file is located)
});

// 2nd Route
app.get("/about",(request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
// ("__dirname" is "directory name" - the folder where this file is located)
});


// 3rd Route
app.get("/gallery",(request, response, next) => {
    response.sendFile(__dirname + "/views/gallery.html");
// ("__dirname" is "directory name" - the folder where this file is located)
});