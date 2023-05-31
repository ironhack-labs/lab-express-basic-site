
const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public/'))

app.get("/", (req, res, next) => {
    console.log("-- homepage requested")
    // res.send("homepage")
    // res.sendFile(__dirname + "/views/page-home.html")
    res.sendFile("/views/page-home.html", { root: __dirname });
})

app.get("/works", (req, res, next) => {
    console.log("-- works page requested")
    // res.send("works")
    // res.sendFile(__dirname + "/views/page-works.html")
    res.sendFile("/views/page-works.html", { root: __dirname });
})
app.get("/about", (req, res, next) => {
    console.log("-- about page requested")
    // res.send("about")
    // res.sendFile("/views/page-about.html", { root: __dirname });

    // fetchTextWiki().then(response => console.log(response))

    res.sendFile("/views/page-about.html", { root: __dirname });
})

const port = 3000
app.listen(port, () => console.log(`now listening on port ${port}: http://localhost:${port}/ or http://127.0.0.1:${port}/`))

// https://en.wikipedia.org/wiki/Dwight_Schrute
// https://www.mediawiki.org/wiki/API:Get_the_contents_of_a_page
// https://www.mediawiki.org/wiki/API:Data_formats

/* */

// // handle Cross-Origin Resource Sharing
// const handleCors = (req, res, next) => {
//     // res.set('Content-Type', 'text/plain');
//     // res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // allowed origin
//     res.header('Access-Control-Allow-Origin', 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=Dwight_Schrute');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // allowed methods
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // allowed header
//     // allow the browser to send the appropriate CORS preflight response
//     if (req.method === 'OPTIONS') {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// };
// // use CORS middleware
// app.use(handleCors);

// function fetchTextWiki() {
//     const urlWikiAPI = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=Dwight_Schrute'
//     return fetch(urlWikiAPI, {
//         // mode: 'no-cors',
//         // method: "GET"
//     })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         // const introPageId = Object.keys(data.query.pages)[0];
//         // const introText = data.query.pages[pageId].extract;
//         const introText = Object.values(data.query.pages)[0].extract; // directly...
//         return introText
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }