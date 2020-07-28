
const express = require("express");
const app = express();
const port = 3000;


app.use((req, res, next) => {
    console.log('In the middleware')
    next()
})

app.use(express.static('public'))

app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/views/home.html')
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
});

app.get("*", (req, res) => {
    res.status(404).send("Sorry, page not found...Blame our developer");
});


app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

// app.use(express.static("public"))

// app.get("/", (req, res) => {
//     consolelog(__dirname)
//     response.status(200).sendFile(__dirname + '/views/home.html')
// });

// app.get("/about", (req, res) => {
//     response.status(200).sendFile(__dirname + '/views/about.html')
// });

// app.get("/works", (req, res) => {
//     response.status(200).sendFile(__dirname + '/views/works.html')
// })

// app.get("*", (req, res) => {
//     res.status(404).send("Sorry, page not found...Blame our developer");
// });

// app.listen(port, () =>
//     console.log(`Example app listening at http://localhost:${port}`)
// );