const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'Eliane Radigue',
        styles: ['index.css'],
    });
});

router.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Eliane Radigue',
        styles: ['about.css'],
    });
});

router.get('/works', (req, res) => {
    const videos = [
        {
            url: 'https://www.youtube.com/embed/D2U0q4lZiFg',
            caption: 'IMA Portrait documentary',
        },
        {
            url: 'https://www.youtube.com/embed/NLEy94_FjG0',
            caption: 'Adnos I-III',
        },
        {
            url: 'https://www.youtube.com/embed/l6gncKkp34E',
            caption: `L'entretien infini - Hans Ulrich Obrist - 2014`,
        }
    ];
    
    res.render('works.hbs', {
        title: 'Sound works',
        styles: ['works.css'],
        videos: videos,
    });
});

router.get('/gallery', (req, res) => {
    res.render('gallery.hbs', {
        title: 'A video gallery',
    });
});

module.exports = router;