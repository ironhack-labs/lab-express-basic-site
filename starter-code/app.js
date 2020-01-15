const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
//Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/view/home.html');
});
//About
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/view/about.html');
});
//Gallery
app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/view/gallery.html');
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
