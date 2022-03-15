const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.use(express.static('public'))

// our first Route
app.get('/', (request, response, next) => {
  console.log(request)
  response.sendFile(__dirname + '/views/index.html')
})

// responding with a dynamic handlebars template
app.get('/about', (request, response, next) => {
    const data = {
        lifeDetails : {'Rank' : 27,
                    'Country' : 'Switzerland',
                    'Age' : '40 ans',
                    'Birth details'  : '08 août 1981, at Bâle',
                    'Size' : '1m85',
                    'Weight' : '85 kg'
                    }
    }
    response.render('about', data)
  })

// responding with a dynamic handlebars template
app.get('/work', (request, response, next) => {
    const data = {
        careerDetails : {
                    'Titre(s)' : '103  dont 28 en Masters Series',
                    'Titres du Grand Chelem' : 20,
                    "Open d Australie" : '2004, 2006, 2007, 2010, 2017, 2018' ,
                    'Roland Garros' : '2009' ,
                    'US Open' : '2004, 2005, 2006, 2007, 2008' ,
                    'Wimbledon' : '2003, 2004, 2005, 2006, 2007, 2009, 2012, 2017',
                    'Coupe Davis' : 'Vainqueur (2014)',
                    'Meilleur Classement' : '1er',
                    }
    }
  response.render('work', data)
})

// responding with a dynamic handlebars template
app.get('/gallery', (request, response, next) => {
    const data = {
        'images':["https://media2.giphy.com/media/O0EvAvjm4GFJ6/giphy.gif?cid=f7aefa58pezzg9a1gl9hum4zzx9srb63earwzzrtiwrd591u&rid=giphy.gif&ct=g",
                    "https://media3.giphy.com/media/l3q2sZh1JIdKQ731K/giphy.gif?cid=f7aefa58pezzg9a1gl9hum4zzx9srb63earwzzrtiwrd591u&rid=giphy.gif&ct=g",
                    "https://media2.giphy.com/media/26xBATl8WPOE6z7ri/giphy.gif?cid=f7aefa58pezzg9a1gl9hum4zzx9srb63earwzzrtiwrd591u&rid=giphy.gif&ct=g"]
    }
  response.render('gallery', data)
})


// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'))