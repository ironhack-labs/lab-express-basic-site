const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/about', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'about.html'));
});

module.exports = router;
