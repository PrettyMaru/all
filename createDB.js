var async = require("async")

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var Hero = require("./models/hero").Hero

async.series([
        open,
        dropDatabase,
        createHeroes,
        close
    ],
    function(err, result) {
        if (err) throw err
        console.log("ok")
    })

function open(callback) {
    mongoose.connection.on("open", callback)
}

function dropDatabase(callback) {
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createHeroes(callback) {
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
            callback(err)
        })
}

function close(callback) {
    mongoose.disconnect(callback)
}