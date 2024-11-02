const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/work', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'work.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

