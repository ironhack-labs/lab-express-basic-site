const express = require("express");
const router = new express.Router();


const users = [{ name: "lolo"} , {name:"lala"}, {name:"lili"}];

router.get("/", (req, res)=> {
    res.json(users);
})

