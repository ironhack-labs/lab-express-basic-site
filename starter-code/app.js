const express = require(`express`);
const app = express()


app.use(express.static('public'))
app.get('/', (req, res, next) =>{
    res.sendFile(__dirname + "/views/home.html")
}) 

app.get('/about', (req, res, next) =>{
    res.sendFile(__dirname + "/views/about.html")
}) 

app.get('/books', (req, res, next) =>{
    res.sendFile(__dirname + "/views/books.html")
}) 


app.listen(3000,()=>
    console.log ('PP - Cristofer 2 y Mishu '));