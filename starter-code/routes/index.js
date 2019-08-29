const path = require("path");
const express = require("express");

const router = express.Router();
router.get("/", (req, res, next)=>{
    res.sendfile(path.join(__dirname,"..","..",'views', 'index.html'));
});
router.get("/gallery", (req, res, next)=>{
    res.sendfile(path.join(__dirname,"..","..",'views', 'gallery.html'));
});
router.get("/about", (req, res, next)=>{
    res.sendfile(path.join(__dirname,"..","..",'views', 'about.html'));
});
module.exports = router;