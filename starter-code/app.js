const express = require('express');
const app = express();
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send(`
//     <h1>:)</h1>
//   `);
// });

// app.get('/home', (req, res) => {
//   res.sendFile(__dirname + '/views/home.html');
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});


app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html');
});

const port = 3000;
app.listen(port,() => {
  console.log(`Ready on port ${port}`);
})
