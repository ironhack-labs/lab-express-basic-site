// const express = require("express");
// const app = express();
// app.get("/set", (request, response) => {
//   response.send(`<h1>abcd</h1>`);
// });
// app.listen(3000);

const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/home", (request, response) =>
  response.sendFile(__dirname + "/views/home.html")
);

app.get("/work", (request, response) =>
  response.sendFile(__dirname + "/views/work.html")
);

app.get("/about", (request, response) =>
  response.sendFile(__dirname + "/views/about.html")
);
app.listen(3000, () => console.log("My first app listening on port 3000!"));
