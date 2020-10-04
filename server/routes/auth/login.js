const express=require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const BCRYPT_GEN_KEY = process.env.BCRYPT_GEN_KEY
const JWT_KEY_AUTH = process.env.JWT_KEY_AUTH; 
const User = require('../../model/user/user');
const EMAIL_TRANSPORTER = require("../../config/email");
const Validate = require("../../util/validate");
const statusCode = require("../../util/status-code");
router.post("/login",(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password)
        return res.status(statusCode.unProcessableEntity).send();

    User.findOne({email:email})
    .then(user=>{
        if(!user)
            return res.status(statusCode.userDoesNotExist).send();
        
            console.log("here! login")
        const hash = user.password;
        bcrypt.compare(password,hash,(err,result)=>{
            if(err)
                return res.status(statusCode.internalServerError).send();
            
            if(!result)
                return res.status(statusCode.passwordDoNotMatched).send();
            
                const savedUser = {
                    name:user.name,
                    id:user._id
                }
            const token = jwt.sign(savedUser,JWT_KEY_AUTH,{expiresIn:"10d"});
            return res.status(statusCode.success).send(token);
        })
    })
    .catch(err=>{
        console.log(err);
        return res.status(statusCode.internalServerError).send();
    })
})

module.exports = router