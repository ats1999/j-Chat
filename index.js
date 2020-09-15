const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.send("Hello i am okey!")
})
app.listen(PORT,()=>console.log(`I am listining on ${PORT} port!`))