const express = require('express');
const hbs = require('hbs');

// -------------------------
// Express instance
// -------------------------
const app = express();
const port = 4000;
app.listen(port, () => console.log(`Ready on port ${port}`));


// -------------------------
// App configurations
// -------------------------
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");
app.use('/public', express.static(__dirname + '/public'))


// -------------------------
// Data
// -------------------------

let about = {
    title: "About Us",
    main_img: 'public/images/about-img.jpg',
    intro: {
        title: "White Water",
        description: "<p>Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, aeneam consectetur adipiscing elit. Fusce iaculis feugiat arcunum fermentum hendrerit.Suspendisse auctor labor nisi, et interdum diam facilisis, aliquam pulvinar semi egetis belle sollicitudin ut. Nullam tincidun finibustus scelerisque.</p>",
        link: "/about",
        link_label: "Read more"
    },
    highlight: {
        title: "Suspendisse auctor labor nisi",
        content: "Donec sed odio dui duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, aeneam consectetur adipiscing elit. Fusce iaculis feugiat arcunum fermentum hendrerit. Suspendisse auctor labor nisi, et interdum diam facilisis, aliquam pulvinar semi egetis belle sollicitudin ut. Nullam tincidun finibustus scelerisque"
    },
    column_1: "<p>Donec sed odio dui duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, aeneam consectetur adipiscing elit. Fusce iaculis feugiat arcunum fermentum hendrerit. Suspendisse auctor labor nisi, et interdum diam facilisis, aliquam pulvinar semi egetis belle sollicitudin ut. Nullam tincidun finibustus scelerisque.</p><p>Nullam quis risus eget urna mollis ornare vel eu leo.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit tempus porttitor.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>",
    column_2: "<p>Donec sed odio dui duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, aeneam consectetur adipiscing elit.Fusce iaculis feugiat arcunum fermentum hendrerit.Suspendisse auctor labor nisi, et interdum diam facilisis, aliquam pulvinar semi egetis belle sollicitudin ut.Nullam tincidun finibustus scelerisque.</p><p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>"
};

let articles = [
    {
        image: "public/images/gallery/04.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image: "public/images/gallery/09.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image: "public/images/gallery/07.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image: "public/images/gallery/05.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image: "public/images/gallery/02.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image: "public/images/gallery/09.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image: "public/images/gallery/04.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image: "public/images/gallery/07.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image: "public/images/gallery/05.jpg",
        title: "Unde commodi",
        excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
];


// -------------------------
// Pages
// -------------------------
app.get('/', (request, response) => {
    response.render('home', {
        home: 'active',
        hero: {
            title: "Ride every wave as if it's your last",
            subtitle: "We love the motion of the ocean"
        },
        carousel_slides: [
            {
                image: 'public/images/carousel/01.jpg',
            },
            {
                image: 'public/images/carousel/02.jpg',
            },
            {
                image: 'public/images/carousel/03.jpg',
            },
            {
                image: 'public/images/carousel/04.jpg',
            }
        ],
        about_section: {
            title: about.title,
            content: about.intro,
            main_img: about.main_img
        },
        latest_section: {
            title: "Latest",
            articles: articles.slice(0, 3)
        }
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        about: 'active',
        content: about
    });
});

app.get('/articles', (request, response) => {
    response.render('articles', {
        articles: 'active',
        title: 'articles',
        content: articles
    });
});

app.get('/gallery', (request, response) => {
    response.render('gallery', {
        gallery: 'active',
        title: 'gallery',
        photos: [
            'public/images/gallery/01.jpg',
            'public/images/gallery/02.jpg',
            'public/images/gallery/03.jpg',
            'public/images/gallery/04.jpg',
            'public/images/gallery/05.jpg',
            'public/images/gallery/06.jpg',
            'public/images/gallery/07.jpg',
            'public/images/gallery/08.jpg'
        ]
    });
});

app.get('/contact', (request, response) => {
    response.render('contact', {
        contact: 'active',
        title: 'contact us',
        address: {
            name: 'Surf School, Inc.',
            address: '1273 Market St, Suite 2<br>San Francisco, CA 94103',
            phone_number: '+1234567890',
            phone_number_formatted: '(123) 456-7890',
            email: 'surg.school@example.com'
        }
    });
});
