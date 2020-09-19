const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI,{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(!err)
    console.log("Database connected!");
    else console.log('Problem  in connecting database!',err)
})
