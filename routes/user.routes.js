var express = require('express');
var router = express.Router();

//Model
const UserModel =require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('GET request from USERS');
});

//Create a User users/register
router.post('/register',(req,res,next)=>{
  const {username, password} = req.body
  const newUser = new UserModel({username, password})
  newUser.save()
  .then(data =>res.json(data))
  .catch(err =>{next({message:err})})
})

module.exports = router;
