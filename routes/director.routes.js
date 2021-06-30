const express =require('express')
const router = express.Router()


//Model
const DirectorModel = require('../models/Director')

//GET all directors
router.get('/',(req, res, next)=>{
    res.end('Get request to Director Page...')
})

module.exports =router