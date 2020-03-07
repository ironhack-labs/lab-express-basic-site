const path = require('path')

module.exports = app =>{

    app.get('/work',(req,res)=>{
        res.sendFile(path.join(path.dirname(__dirname),'app','html','homepage.html'))
    })

}