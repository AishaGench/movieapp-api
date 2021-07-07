const jwt =require('jsonwebtoken')
module.exports = (req, res, next)=>{
    const token = req.body.token || req.headers['x-access-token'] || req.params.token;
    if(token){
        jwt.verify(token, req.app.get("api_secret_key"), function(err,decoded){
            if(err){
                res.send("Failed to authenticate token...")
            }else{
                console.log(decoded)
                next()
            }
        })
    }else{
        res.send("No token provided...")
    }
}