module.exports.home = (req, res, next) => {
    res.render('common/home')
}

module.exports.about = (req, res, next) => {
    res.render('common/about')
}

module.exports.work = (req, res, next) => {
    res.render('common/work')
}