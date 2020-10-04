const jwt = require('jsonwebtoken');
const TOKEN_SEPERATOR = process.env.TOKEN_SEPERATOR;
const JWT_KEY_AUTH = process.env.JWT_KEY_AUTH;

var requireLogin=(req,res,next)=>{
    console.log("JWT",JWT_KEY_AUTH);
    const token = req.headers['authorization'];
    console.log("token ",token)
    if(!token){
        return res.status(401).send();
    }

    jwt.verify(token,process.env.JWT_KEY_AUTH,(err,user)=>{
        if(err)
            return res.status(401).send();
        
        req.user = user;
        next();
    });
}

module.exports = requireLogin;