exports.home = (req,res) =>{
    res.sendFile(__dirname + "/public/index.html")
};

exports.about = (req,res) =>{
    res.sendFile(__dirname + "/public/about.html")
};

exports.photos = (req,res) =>{
    res.sendFile(__dirname + "/public/photos.html")
};