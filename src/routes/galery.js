const path = require('path')

module.exports = app =>{

    app.get('/galery',(req,res)=>{
        res.sendFile(path.join(path.dirname(__dirname),'app','html','homepage.html'))
    })

}