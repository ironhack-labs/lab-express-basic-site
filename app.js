console.log("wooo")

const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('short'))

app.use(express.static("public"))

app.get("/", (req, res) => {
    // res.send("Home")
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/testimonials", (req, res) => {
    // res.send("bout")
    res.sendFile(`${__dirname}/views/testimonials.html`)
})

app.get("/pricing", (req, res) => {
    // res.send("works")
    res.sendFile(`${__dirname}/views/pricing.html`)
})

app.listen(3000)