//Seccion 1. importaciones

const express  =require("express")
const res = require("express/lib/response")
const router = express.Router()

//Seccion 2. Rute

router.get("/", (req,res)=> {

    res.render("Hola de nuevo")
})

router.get ("/index", (req,res) => {
    res.render("index")
})

router.get ("/about", (req,res) => {
    res.render("about")
})

router.get ("/works", (req,res) => {
    res.render("works")
})


//seccion 3. exportacion
module.exports = router
