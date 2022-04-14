var express = require('express');
var router = express.Router();

/* Страница Эрена */
router.get('/eren', function(req, res, next) {
  res.send("<h1>Страница Эрена</h1>")
});

/* Страница Ято */
router.get('/yato', function(req, res, next) {
  res.send("<h1>Страница Ято</h1>")
});

/* Страница Дазая */
router.get('/dazai', function(req, res, next) {
  res.send("<h1>Страница Дазая</h1>")
});

module.exports = router;
