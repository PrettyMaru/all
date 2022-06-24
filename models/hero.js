var mongoose = require('mongoose')
var Schema = mongoose.Schema


var heroSchema = new Schema({
    title: String,
    nick: {
        type: String,
        unique: true,
        required: true
    },
    avatar: String,
    desc: String,
    created: {
        type: Date,
        default: Date.now
    }
})
module.exports.Hero = mongoose.model("Hero", heroSchema)