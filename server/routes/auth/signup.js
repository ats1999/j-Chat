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
router.post('/signup',(req,res)=>{ 
    const {fname,lname,email,password}=req.body;

    if(!Validate.text(fname+lname) || !Validate.email(email) || !Validate.password(password))
        return res.status(statusCode.unProcessableEntity).send("Invailid input"); 

    User.findOne({email:email})
    .then(user=>{
        if(user){
            // indecating user already exists.
            return res.status(statusCode.userAlreadyExists).send("User already exists");
        }

        bcrypt.genSalt(10,(err,salt)=>{
            if(err)
                return res.status(statusCode.internalServerError).send();
            
                bcrypt.hash(password,salt,(err,hash)=>{
                    if(err)
                        return res.status(statusCode.internalServerError).send();
                    
                    const newUser = new User({
                        fname:fname,
                        lname:lname,
                        email:email,
                        password:hash
                    })
                    
                    newUser.save()
                    .then(savedUser=>{
                        try{
                            const user = {
                                fname:savedUser.fname,
                                lname:savedUser.lname,
                                id:savedUser._id
                            }
                            const token =jwt.sign(user,JWT_KEY_AUTH,{expiresIn:"10d"});
                            return res.status(statusCode.success).send(token);
                        }catch(e){
                            console.log(e);
                            return res.status(statusCode.internalServerError).send();
                        }
                    })
                    .catch(err=>{
                        return res.status(statusCode.internalServerError).send();
                    }) //.save()
                }) // .hash()
        }) // .genSalt()
    })// user.findOne() 
    .catch(err=>{
        console.log(err)
        return res.status(statusCode.internalServerError).send(token);
    }) // findOne()
})

router.post('/verify-user',(req,res)=>{
    const {token,email,password} = req.body;
    //console.log(token)
    let tokenUser = jwt.verify(token,JWT_KEY); 

    if(email != tokenUser.email || password != tokenUser.password)
        return res.status(422).send();

    bcrypt.genSalt(10,function(err,salt){
        if(err)
            return res.status(500).send();
        
        bcrypt.hash(tokenUser.password,salt,(err,hash)=>{
            if(err)
                return res.status(500).send();
            
            const user = new User({
                name:tokenUser.name,
                userId:tokenUser.email,
                password:hash
            })

            user.save()
            .then(user=>{
                const newUser = {
                    name:user.name,
                    id:user._id
                }
                console.log(newUser)
                const token ="Token "+jwt.sign(newUser,JWT_KEY,{expiresIn:"15d"});
                return res.status(200).json({user:newUser,token});
            }) // save()
            .catch(err=>{
                console.log(err)
                return res.status(500).send();
            }) // save()
        }) // hash()
    }) // genSalt()
})
module.exports = router;
