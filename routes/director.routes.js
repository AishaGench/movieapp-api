const express = require('express')
const router = express.Router()

// Model
const DirectorModel = require('../models/Director') 

// GET all directors with their movies
router.get('/', (req, res,next)=>{
  //res.end('GET request to Director Page...')
  //DirectorModel.find()
  DirectorModel.aggregate([
    {
      $lookup:{
        from:'movies',
        localField:'_id',
        foreignField:'director_id',
        as:'movies'
      }
    },
    {
      $project:{
        _id:0,
        name:1,
        lastname:true,
        'movies.title':true,
        'movies.imdb_score':1
      }
    }
  ])
  .then((directorList)=>{res.json(directorList)})
  .catch((err)=>{next({message:err})})
})

router.post('/',(req, res, next)=>{
  const newDirector = new DirectorModel(req.body)
  newDirector.save()
  .then((director)=>{res.json(director)})
  .catch((err)=>{next({message:err})})
})
module.exports = router