/**
 * This functon will notify all other users, that a user has joined the  chat.
 * @param {newly connected socket} socket 
 */
var i = 0;
function connect(socket,io){
    console.log("A user has been connected!")
    // send this msg to the recipents
    socket.send("Hi, welcome to this chat group.");

    socket.on("disconnect",()=>{
       console.log("A user disconnected!");
    })
    
    const msg=`You are  in room ${i}`
    io.sockets.in("room "+i).emit("room",msg )
}

const chatAPI = {
    connect:connect
}
module.exports = chatAPI;