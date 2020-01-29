const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("views"));

// Route handler
app.get("/", (request, response) => {
  console.log("GET request made to /");
  response.sendFile(__dirname + "/views/homepage.html");
});

// // Callback function in listen() will fire one time, once the server starts listening
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
