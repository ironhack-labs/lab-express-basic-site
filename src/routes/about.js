const path = require('path')

module.exports = app =>{

    app.get('/about',(req,res)=>{
        res.sendFile(path.join(path.dirname(__dirname),'app','html','about.html'))
    })

}