const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = socketio(http);
const PORT = process.env.PORT || 4000
app.get("/",(req,res)=>{
   res.send("Hello, Let's start chatting...")
})

io.on("connection",(socket)=>{
   console.log("A new connection has been established!");
   socket.on("disconnect",()=>{
      console.log("A user disconnected!");
   })
})

http.listen(PORT,()=>console.log(`I  am running on ${PORT} PORT!`))