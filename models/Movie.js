const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    director_id:Schema.Types.ObjectId,
  title:{
    type:String,
    required:[true, 'The field `{PATH}` is required'],
    maxlength:[50,'The field `{PATH}` must be less than {MAXLENGTH} characters']
  },
  category:{type:String, maxlength:30, minlength:1},
  year:{type:Number, min:1850, max:2100},
  imdb_score:{type:Number, max:10, min:0},
  country:{type:String, maxlength:60, minlength:2},
  createdAt:{type:Date, default:Date.now}

})



module.exports = mongoose.model("movie", MovieSchema)