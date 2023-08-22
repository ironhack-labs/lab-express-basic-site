const express = require("express");
const app = express();
// Make everything inside of public/ available
app.use(express.static('public'));


// app.get(path, code)

//homepage
app.get('/', (req,res,next) => {
    res.sendFile(__dirname + '/views/home.html');
})

//About page
app.get("/about", (request, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
})

//Work page
app.get("/work", (request, res, next) => {
    res.sendFile(__dirname + '/views/work.html')
})


app.listen(3000, () => console.log('My first app listening on port 3000! '));

