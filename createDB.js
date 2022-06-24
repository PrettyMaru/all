var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var Hero = require("./models/hero").Hero

var hero = new Hero({
    title: "Эрен",
    nick: "Eren"
})

console.log(hero)
hero.save(function(err, hero, affected) {
    console.log(hero.title)
})