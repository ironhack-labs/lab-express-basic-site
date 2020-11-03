const express = require('express');
const app = express()
// /Users/ivanmac/Desktop/lab-express-basic-site
const dirName = __dirname
console.log(dirName);
app.use(express.static("public"))
