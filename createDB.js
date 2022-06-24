var async = require("async")

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var Hero = require("./models/hero").Hero

mongoose.connection.on("open", function() {
    var db = mongoose.connection.db
    db.dropDatabase(function(err) {
        if (err) throw err

        async.parallel([
                function(callback) {
                    var eren = new Hero({ nick: 'Eren' })
                    eren.save(function(err, eren) {
                        callback(err, "Eren")
                    })
                },
                function(callback) {
                    var yato = new Hero({ nick: 'Yato' })
                    yato.save(function(err, yato) {
                        callback(err, "Yato")
                    })
                },
                function(callback) {
                    var dazai = new Hero({ nick: 'Dazai' })
                    dazai.save(function(err, dazai) {
                        callback(err, "Dazai")
                    })
                },
                function(callback) {
                    var shinji = new Hero({ nick: 'Shinji' })
                    shinji.save(function(err, shinji) {
                        callback(err, "Shinji")
                    })
                }
            ],
            function(err, result) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Успешно созданы герои с никами: " + result.join(", "))
                }
                mongoose.disconnect()
            })
    })
})