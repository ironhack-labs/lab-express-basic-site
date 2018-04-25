exports.about = (req,res)=>{
    res.sendFile(__dirname + '/public/views/about.html');
};
    
exports.gallery = (req,res)=>{
    res.sendFile(__dirname + '/public/views/gallery.html');
};