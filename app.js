

const express = require('express')
const app = express()

function ourMiddleWare(req, res, next){
    console.log(__dirname);
    next();
}


app.use(ourMiddleWare);
app.use(express.static('public'))

app.set('view engine', 'hbs');

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/views/home.html');
// })

app.get('/', function (req, res) {
       res.send('This is Home')
     })

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
})


app.get('/info', function (req, res) {
    let herInfo =  [
        {name: 'Andy', age: 19},
        {name: 'Abdy', age: 22},
        {name: 'Lucy', age: 21},
        {name: 'Juan', age: 20}
    ]
    res.render(__dirname + '/views/hbs/herInfo.hbs', {age})
})

// app.get('/student/:studentName', function (req, res) {
    
//       res.render(__dirname + '/views/hbs/students.hbs', {studentName: req.params.studentName})
// })

app.listen(3008, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3008/`);
})