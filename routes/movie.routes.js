const express = require('express')
const router = express.Router()

// Import the model
const MovieModel = require('../models/Movie')

//Get request with node-express-get snippet
router.get('/', (req, res) => {
  res.send('GET request to the homepage !!!')
})

// POST request to save Movies in the DB
router.post('/',(req, res,next)=>{
  const newMovie = new MovieModel(req.body)
  newMovie.save()
  .then((movie)=>{res.json(movie)})
  .catch((error)=>{res.json(error)})
})



// Export the route
module.exports = router