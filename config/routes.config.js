const express = require('express')

const common = require('../controllers/common.controllers')

const router = express()
router.get('/', common.home)
router.get('/about', common.about)
router.get('/work', common.work)


router.get('')

module.exports = router