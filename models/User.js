const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create the model from Schema
const UserSchema = new Schema({
    username:{type:String, require:true, unique:true},
    password:{type:String, require:true, minlength:5}
})


module.exports = mongoose.model('user', UserSchema)