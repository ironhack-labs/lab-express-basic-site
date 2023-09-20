const express = require('express');
const app = express();

const port = 3000;
app.listen(port, (e) => {
    if (e) {
        console.error(e)
    }
    console.log("app is running on port:", port)
});
//make everything inside 'public'
app.use(express.static('public'));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.get("/projects", (req, res, next) => {

    res.sendFile(__dirname + '/views/projects.html')
})
app.get("/skills", (req, res, next) => {
    res.sendFile(__dirname + '/views/skills.html')
})
app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html')
})