const hbs = require('hbs')

hbs.registerPartials(__dirname + '/../views/partials')

hbs.registerHelper('active', (options) => {
    const paramaters = options.hash
    return paramaters.path === paramaters.match ? 'active': ''
})