const express = require("express");
const app = express();
const http = require("http").createServer(app);
const PORT = process.env.PORT || 4000
app.get("/",(req,res)=>{
   res.send("Hello, Let's start chatting...")
})

http.listen(PORT,()=>console.log(`I  am running on ${PORT} PORT!`))