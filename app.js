
const express = require('express');

const app = express();

app.use(express.static('/public'))

app.get("/about", (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get("/work", (request, response) => {
    response.sendFile(__dirname + '/views/work.html')
})

app.get("/", (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.listen(3000, () => {
    console.log('Serever listening on port 3000')
})