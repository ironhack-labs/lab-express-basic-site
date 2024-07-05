const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

// Set view engine to hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Register the partials directory
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Middleware for serving static files
app.use(express.static('public'));

// Routes for each page
app.get('/', (req, res) => {
    res.render('index', { title: 'Shada Mustafa' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Shada Mustafa' });
});

app.get('/works', (req, res) => {
    res.render('works', { title: 'Works' });
});

app.get('/gallery', (req, res) => {
    const artworks = [];
    for (let i = 2; i <= 24; i++) {
        artworks.push({
            title: `Artwork ${i}`,
            artist: 'Shada Mustafa',
            year: 2024,
            medium: 'Acrylic on Canvas',
            dimensions: '30 x 40 inches',
            description: `Description for Artwork ${i}`,
            image: `/images/${i}.jpg`
        });
    }
    res.render('gallery', { title: 'Gallery', artworks });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
