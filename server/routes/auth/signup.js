const express=require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../model/user/user');
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const EMAIL_TRANSPORTER = require("../../config/email");
router.post('/signup',(req,res)=>{
    console.log(req.body.name)
    return res.status(200);
    // but still need to verify
    const {name,email,password}=req.body;
    
    if(!name||!email||!password){
        console.log("Enter all the fields!");
        return res.status(422).json({err:"Please add all the fields."})
    }
    User.findOne({userId:email})
    .then(user=>{
        if(user){
            return res.status(422).json({msg:"User already exist!"});
        }
        const newUser={
            name:name,
            email:email,
            password:password
        }

        console.log(newUser)
        const token =jwt.sign(newUser,JWT_KEY,{expiresIn:60*60});
        let  Html = "<div>";
        Html+=`<h1>Hello, ${name}...</h1>`;
        Html+="<p style='color:green;'>Welcome to our Dev's community.<br>Click on the link to verify your email<br></p>"
        Html+=`https://bdevg.herokuapp.com/verify?dev=${token}`
        Html+="<br>If you are not able to verify email using link then copy paste the above link in the browser.<br><strong>This link will expaire in 10 minutes.<strong></div>";
        
        EMAIL_TRANSPORTER.sendMail({
            to:email,
            from:"rahul@bdevg.com",
            subject:"Verify your email.",
            html:Html
          }).then(res=>{
            console.log("No Error");
          }).catch(err=>{
            console.log("Error",err);
          })
        res.status(200).send();
    })// user.findOne() 
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
