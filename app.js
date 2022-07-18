// const express = require("express");

// const app = express();

// app.get("/", (request, response) => {
//   response.sendFile(__dirname + "./views/home.html");
// });

// app.listen(5555, () => {
//   console.log("Running awesome server 5555 on localhost:5555");
// });

const express = require("express");
const PORT = 3000;
const app = express();
const router = express.Router();

router.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});
router.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});
router.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log("Running Geoffrey away");
});
