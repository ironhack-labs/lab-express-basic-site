const path = require("path");
const express = require("express");
const router = require("express").Router();
const app = express();


app.use(express.static("public"))
app.use("/", router)

router.get("/", (req, res) => {
    console.log("GET request on /home route")
    return res.sendFile(path.join(__dirname, "/views/home.html"))
})

router.get("/about", (req, res) => {
    console.log("GET request on /home route")
    return res.sendFile(path.join(__dirname, "/views/about.html" ))
}) 

router.get("/works", (req, res) => {
    console.log("GET request on /works route")
    return res.sendFile(path.join(__dirname, '/views/works.html' ))
})

router.get('/photoGallery', (req, res) => {
    console.log('GET request on /photoGallery route')
    return res.sendFile(path.join(__dirname, '/views/photoGallery.html'))
})

app.use("/", router)
app.listen(4000, () => console.log("Server is up and running at port 4000"))