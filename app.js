const express = require("express")

const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/discografia", (req, res) => {
    res.sendFile(`${__dirname}/views/discografia.html`)
})

app.get("/discografia", (req, res) => {
    res.sendFile(`${__dirname}/views/discografia.html`)
})

app.get("/acerca", (req, res) => {
    res.sendFile(`${__dirname}/views/acerca.html`)
})

app.listen(3000, () => {
    console.log("listening on: http://localhost:3000")
})