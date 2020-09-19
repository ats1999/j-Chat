const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const chatAPI = require("./server/api/chat");
const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
   res.send("Hello, Let's start chatting...")
})

io.on("connection",(socket)=>{
   chatAPI.connect(socket,io);
})

http.listen(PORT,()=>console.log(`I  am running on ${PORT} PORT!`))