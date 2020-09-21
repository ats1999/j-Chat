const jwt = require('jsonwebtoken');

var requireLogin=(req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('Token ')[1];

    if(!token){
        return res.status(401).json({msg:"Login first!"});
    }

    jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
        if(err)
            return res.status(401).json({msg:"Login first."})
        
        req.user = user;
        next();
    });
}

module.exports = requireLogin;