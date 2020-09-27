// const jwt = require('jsonwebtoken');

// var requireLogin=(req,res,next)=>{
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split('Token ')[1];

//     if(!token){
//         // invailid token
//         return res.status(401).send();
//     }

//     jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
//         // expired/invailid token
//         if(err)
//             return res.status(422).send()
        
//         req.user = user;
//         next();
//     });
// }

// module.exports = requireLogin;
module.exports = function test(){
    console.log("Required LOgin!")
}