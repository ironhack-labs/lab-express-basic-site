const express = require("express");
const app = express();
const port = 3001;
 app.use(express.static('public'));
 app.get('/',(req,res) => {
    res.sendFile(__dirname + '/views/index.html');
})
 app.get('/about.html',(req,res) => {
    res.sendFile(__dirname + '/views/about.html');
})
 app.get('/gallery.html', (req, res) => {
    res.sendFile(`${__dirname  }/views/gallery.html`);
})
 app.listen(port,() => {
    console.log('Listening port ${port}');
}) 