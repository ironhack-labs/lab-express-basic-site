const express = require(`express`);
require(`dotenv`).config();
const PORT = process.env.PORT;
const app = express();

app.get(`/`, (request, response) => {
    response.sendFile(__dirname + `/views/home.html`)
});

app.get(`/home.html`, (request, response) => {
    response.sendFile(__dirname + `/views/home.html`)
});

app.get(`/about.html`, (request, response) => {
    response.sendFile(__dirname + `/views/about.html`)
}); 

app.get(`/work.html`, (request, response) => {
    response.sendFile(__dirname + `/views/work.html`)
});     

app.listen(process.env.PORT , () => {
    console.log(`new port`);
});