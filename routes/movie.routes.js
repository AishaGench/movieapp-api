const express = require('express')
const router = express.Router()

// Model
const DirectorModel = require('../models/Director') 

// GET all directors
router.get('/', (req, res,next)=>{
  //res.end('GET request to Director Page...')
  DirectorModel.find()
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