import express from "express";

const port = 3000;
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
    response.sendFile(__dirname + "/views/works.html");
});

app.get("/photo-gallery", (request, response) => {
    response.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(port, () => {
    console.log("Server listening on port: " + port);
});
