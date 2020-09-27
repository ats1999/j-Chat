const express=require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_KEY_AUTH = process.env.JWT_KEY_AUTH; 
const User = require('../../model/user/user');
const EMAIL_TRANSPORTER = require("../../config/email");
const Validate = require("../../util/validate");

router.post('/signup',(req,res)=>{
    // verify correctness of input
    const {name,email,password}=req.body;
    if(!Validate.text(name) || !Validate.email(email) || !Validate.password(password))
        return res.status(422).send("Invailid input"); 

    User.findOne({email:email})
    .then(user=>{
        if(user){
            // indecating user already exists.
            return res.status(421).send("User already exists");
        }
        const newUser={
            name:name,
            email:email,
            password:password
        }

        const token =jwt.sign(newUser,JWT_KEY_AUTH,{expiresIn:"10d"});

        let  Html = "<div>";
        Html+=`<h1>Hello, ${name}...</h1>`;
        Html+="<p style='color:green;font-size:30px;'>Welcome to our Dev's community.<br>Click on the link to verify your email<br></p>"
        Html+=`httpp://localhost:4000/verify?dev=${token}`
        Html+="<br>If you are not able to verify email using link then copy paste the above link in the browser.<br><strong>This link will expaire in 10 minutes.<strong></div>";
        
        EMAIL_TRANSPORTER.sendMail({
            to:email,
            from:"verify@bdevg.com",
            subject:"Verify your email.",
            html:Html
          }).then(res=>{
            return res.status(200).send();
          }).catch(err=>{
              console.log(err);
              return res.status(200).send();
          })
    })// user.findOne() 
    .catch(err=>{
        console.log(err)
        return res.status(500).send(token);
    })
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
