const express = require(`express`);
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
    console.log("GET request made to /");

    response.sendFile(__dirname + "/views/home.html"); // __dirname is a global variable available in node.js
});

// app.get("/home", (request, response) => {
//     response.sendFile(__dirname + "/views/home.html");
// });

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response) => {
    response.sendFile(__dirname + "/views/gallery.html");
});




app.listen(3000, () => {
    console.log("Server listening on port:3000");
})