
module.exports = {

    index: (req, res, next) => {
        let data = {
            name: "Mike Havok",
            bootcamp: "IronHack WebDev",
            route : ''
        }
        if(req.url == '/') data.route = 'index'
        res.render('index',data)
    },
    about: (req, res, next) => {
        let data = {
            name: "Mike Havok",
            bootcamp: "IronHack WebDev",
            route : ''
        }
        if(req.url == '/about') data.route = 'About'
        console.log(req.url)
        res.render('about',data)
    },
    photoGallery: (req, res, next) => {
        let data = {
            name: "Mike Havok",
            bootcamp: "IronHack WebDev",
            route : ''
        }
        if(req.url == '/photo') data.route = 'Photo Gallery'
        console.log(req.url)
        res.render('photo',data)
    },

    /*post: function() {
        return "Hola";
    }*/
}

