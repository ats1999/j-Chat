const express = require("express");
var morgan = require('morgan')
const cookieParser=require('cookie-parser')
const app = express();
const http = require("http").createServer(app);
const chatAPI = require("./server/api/chat");
const PORT = process.env.PORT || 4000;
const requiredLogin = require("./server/middleware/required-login");
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
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb'}));

/**
 * Only protected users can access this route.
 */
app.get("/rocket",requiredLogin,(req,res)=>{
	console.log("Chatiiii")
	return res.status(200).send("Let's chat...");
})
const io = require('socket.io')(http);
	io.on("connection",(socket)=>{
	   chatAPI.connect(socket,io);
	})	
// authentication
app.use(require("./server/routes/auth/signup"));
app.use(require("./server/routes/auth/login"));

http.listen(PORT,()=>console.log(`I  am running on ${PORT} PORT!`))