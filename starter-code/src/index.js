function home(req, res) {
    const templatePath = __dirname + '/views/home.html';
    res.sendFile(templatePath)
}

function about(req, res) {
    const templatePath = __dirname + '/views/about.html';
    res.sendFile(templatePath)
}

function gallery(req, res) {
    const templatePath = __dirname + '/views/gallery.html';
    res.sendFile(templatePath)
}

module.exports = { home, about, gallery };