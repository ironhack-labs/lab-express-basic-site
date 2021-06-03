 const express = require('express')
 const app = express()
const path = require('path')
app.set('views', + `${__dirname}/views`)
app.set('view engine', 'hbs')
require('./config/hbs.config')


app.use((req, res, next) => {
    res.locals.path = req.path
    next()
})


const router = require('./config/routes.config')

app.use(express.static('public'))
app.use('/', router)







 const port = process.env.PORT || 3000;
 app.listen(port, () => {
     console.info(`App listening at port ${port}`);
 })