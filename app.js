const express = require("express")
const hbs = require('hbs')
const info = require("./data/info")

const app = express()

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.get("/", ((req, res, next) => {
    res.render('home', info.bill)
}))

app.get("/about", (req, res, next) => {
    res.render('about', info.bill)
})

app.get("/work", (req, res, next) => {
    res.render("work")
})

app.get("/gallery", (req, res, next) => {
    res.status(503)
    res.render("mantainance")
})

app.use((req, res, next) => {
    res.status(404)
    res.render("notFound", {layout: false})
})

app.listen(3000, () => console.log("Listening on port 3000"))