const express = require("express")
const app = express();

app.use(express.static('public'));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html")
});

app.listen(3000);