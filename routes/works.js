const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/works', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'works.html'));
});

module.exports = router;
