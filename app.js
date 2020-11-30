const { static, response } = require('express');
const express = require('express');

const app = express();

app.use(express.static("views"));

app.get("/home", (request, response)=>{
    const htmlFile = `${__dirname}/views/index.html`;

    response.sendFile(htmlFile);
})

app.get("/about", (request, response)=>{
    const aboutFile = `${__dirname}/views/about.html`;

    response.sendFile(aboutFile);
})

app.get("/works", (request, response)=>{
    const workFile = `${__dirname}/views/works.html`;

    response.sendFile(workFile);
})

app.listen(4000, () => console.log("APPPP"))