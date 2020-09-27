const express = require("express");
var morgan = require('morgan')
const cookieParser=require('cookie-parser')
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const chatAPI = require("./server/api/chat");
const PORT = process.env.PORT || 4000;
require('dotenv').config()

// connect  to the database.
require("./server/config/db");

// on the production site, use production build
if(process.env.NODE_ENV == "production"){
	app.use(express.static(path.join(__dirname, 'client/build')))
	app.get("/*",(req,res)=>{
		res.sendFile(path.join(__dirname,"client","build","index.html"))
	})
}else app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json({limit:'10md'}));
app.use(express.urlencoded({limit:'10mb'}));


io.on("connection",(socket)=>{
   chatAPI.connect(socket,io);
})

// authentication
app.use(require("./server/routes/auth/signup"));

http.listen(PORT,()=>console.log(`I  am running on ${PORT} PORT!`))