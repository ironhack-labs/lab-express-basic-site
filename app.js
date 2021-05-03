const path = require("path");

const express = require("express");
const router = require("express").Router();

const app = express();

app.use(express.static("public"));

router.get("/home", (request, response) => {
    console.log("GET request on /home route");
    console.log(__dirname);
    return response.sendFile(path.join(__dirname, "/views/home.html"));
  });

  router.get("/about", (request, response) => {
    console.log("GET request on /about route");
    return response.sendFile(path.join(__dirname, "/views/about.html"));
  });

  router.get("/works", (request, response) => {
    console.log("GET request on /works route");
    return response.sendFile(path.join(__dirname, "/views/works.html"));
  });  

  app.use("/", router);

  app.listen(4000, () => console.log("Server is up and running at port 4000"));