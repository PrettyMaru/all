var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page of characters title' });
  });

/* Страница Эрена */
router.get('/eren', function(req, res, next) {
  res.render('hero', {
    title: "Эрен Йегер",
    picture: "https://i.pinimg.com/564x/f4/6d/01/f46d01481d2d6148ddbb56c4fd10e0b6.jpg",
    desc: "Член Разведкорпуса, 104-й отряд. Титан-прародитель, атакующий титан, титан-молот"
    });
});

/* Страница Ято */
router.get('/yato', function(req, res, next) {
  res.render('hero', {
    title: "Бездомный бог Ято",
    picture: "https://i.pinimg.com/564x/4b/dc/58/4bdc58127e7e66f3efdf1a9605f6a967.jpg",
    desc: "Практически забытый бог погибели, без собственного храма"
    });
});

/* Страница Дазая */
router.get('/dazai', function(req, res, next) {
  res.render('hero', {
    title: "Дазай Осаму",
    picture: "https://i.pinimg.com/564x/d6/78/01/d678010c43b843c06849cf89749f0ddd.jpg",
    desc: "Один из старших сотрудников Вооружённого Детективного Агентства"
    });
});

module.exports = router;
