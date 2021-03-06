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
        _id:1,
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

// Get a Director api/directos/:directorId
const mongoose = require('mongoose')
router.get('/:directorId',(req,res,next)=>{
  DirectorModel.aggregate([
    {
      $match:{_id:mongoose.Types.ObjectId(req.params.directorId)}
    },
    {
      $lookup:{
        from:"movies",
        localField:"_id",
        foreignField:"director_id",
        as:"movies"
      }
    }
  ])
  .then((data)=>{res.json(data)})
  .catch((err)=>{next({message:err})})
})
// Create a new director in MongoDB
router.post('/',(req, res, next)=>{
  const newDirector = new DirectorModel(req.body)
  newDirector.save()
  .then((director)=>{res.json(director)})
  .catch((err)=>{next({message:err})})
})

// Update a Director   api/directos/:directorId
router.put('/:directorId',(req, res, next)=>{
  DirectorModel.findByIdAndUpdate(req.params.directorId, req.body, {new:true})
  .then(director=>{res.json(director)})
  .catch(err=>{next({message:err})})
})

// Delete a Director  api/directos/:directorId
router.delete('/:directorId',(req,res,next)=>{
  DirectorModel.findByIdAndRemove(req.params.directorId)
  .then(director=>res.json(director))
  .catch(err=>{next({message:err})})
})
module.exports = router