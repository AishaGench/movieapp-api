const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DirectorSchema = new Schema({
    name:{type:String, maxlength:60, minlength:5},
    lastName:{type:String, maxlength:60, minlength:5},
    bio:{type:String, maxlength:1000, minlength:20},
    createdAt:{type:Date, default:Date.now}
})


module.exports = mongoose.model('director', DirectorSchema)