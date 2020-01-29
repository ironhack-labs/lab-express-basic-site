const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
    console.log("GET request made to /");
    response.sendFile(__dirname + "/views/index.html");
})

app.get("/about", (request, response) => {
    console.log("GET request made to /about");
    response.sendFile(__dirname + "/views/about.html");
})

app.get("/crimes", (request, response) => {
    console.log("GET request made to /crimes");
    response.sendFile(__dirname + "/views/crimes.html")
})

app.get("/mugshots", (request, response) => {
    console.log("GET request made to /mugshots");
    response.sendFile(__dirname + "/views/mugshots.html");
})

app.listen(3000, () => {
  console.log("Server listening on port 3000!!!!!!!");
});


