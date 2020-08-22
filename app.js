const express = require("express")

const app = express()

app.use(express.static("public"))
app.get("/kenouly", (req, res, next) => {
    console.log(req.url)
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/about", (req, res, next) => {
    console.log(req.url)
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get("/restaurants", (req, res, next) => {
    console.log(req.url)
    res.sendFile(`${__dirname}/views/restaurants.html`)
})

app.get("/books", (req, res, next) => {
    console.log(req.url)
    res.sendFile(`${__dirname}/views/books.html`)
})

app.listen(2000, () => {
    console.log("server is listening at port 2000")
})