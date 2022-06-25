var express = require('express');
var router = express.Router();
var Hero = require("../models/hero").Hero

/* GET home page. */
router.get('/', function(req, res, next) {
    res.cookie('greeting', 'Hi!!!').render('index', { title: 'Home page of characters' /*, menu: menu*/ });
});


module.exports = router;

/* Страница Эрена */
/*
router.get('/eren', function(req, res, next) {
  res.render('hero', {
    title: "Эрен Йегер",
    picture: "https://i.pinimg.com/564x/f4/6d/01/f46d01481d2d6148ddbb56c4fd10e0b6.jpg",
    desc: "Член Разведкорпуса, 104-й отряд. Титан-прародитель, атакующий титан, титан-молот"
    });
}); */

/* Страница Ято */
/*
router.get('/yato', function(req, res, next) {
  res.render('hero', {
    title: "Бездомный бог Ято",
    picture: "https://i.pinimg.com/564x/4b/dc/58/4bdc58127e7e66f3efdf1a9605f6a967.jpg",
    desc: "Практически забытый бог погибели, без собственного храма"
    });
}); */

/* Страница Дазая */
/*
router.get('/dazai', function(req, res, next) {
  res.render('hero', {
    title: "Дазай Осаму",
    picture: "https://i.pinimg.com/564x/d8/f1/d8/d8f1d8014c7b7eb9a007ef8d5b1270f9.jpg",
    desc: "Один из старших сотрудников Вооружённого Детективного Агентства"
    });
}); */

/* Страница Синдзи */
/*
router.get('/shinji', function(req, res, next) {
  res.render('hero', {
    title: "Синдзи Хирако",
    picture: "https://i.pinimg.com/564x/0e/1a/da/0e1ada342dca92e3b11bd3a8e788f5e4.jpg",
    desc: "Вайзард"
    });
}); */