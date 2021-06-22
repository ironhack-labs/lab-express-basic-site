
const express = require('express');

const app = express();


app.use(express.static("public"));

app.get("/kar", (request, response) => {
response.sendFile(__dirname + "/views/kar.html");
});



app.get("/kar1", (request, response) => {
    response.sendFile(__dirname + "/views/kar1.html");
});
    
app.get("/kar3", (request, response) => {
    response.sendFile(__dirname + "/views/kar3.html");
});
    


app.listen(1000, () => console.log("app listening on port 1000"))