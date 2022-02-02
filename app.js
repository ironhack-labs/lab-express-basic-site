const express = require('express')
const hbs = require('hbs')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

//Routing

app.get('/', (req, res) => {
    res.render('index-page')
})
app.get('/about', (req, res) => {
    res.render('about-page')
})
app.get('/works', (req, res) => {
    res.render('works-page')
})
app.get('/photo-gallery', (req, res) => {
    res.render('photo-gallery-page')
})

app.get('/photo-gallery/:id', (req, res) => {
    const images = [
        { img: '/img/1.jpeg', id: 1 },
        { img: '/img/2.jpeg', id: 2 },
        { img: '/img/3.jpeg', id: 3 },
        { img: '/img/4.jpeg', id: 4 },
        { img: '/img/5.jpeg', id: 5 },
        { img: '/img/6.jpeg', id: 6 }
    ]

    const id = req.params.id
    const obj = images.filter(obj => obj.id == id)
    const image = obj[0].img

    console.log('image', image)

    res.render('imageId', { img: image })

    // images
    //     .
    //     .then(eachImage => res.render('imageId', { eachImage }))
    //     .catch(error => console.log(error))
})

app.listen(5005, () => console.log('Server up on port 5005'))