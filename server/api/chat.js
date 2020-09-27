const chatUsersAPI = require("./chat-room-users");
/**
 * This functon will notify all other users, that a user has joined the  chat.
 * @param {newly connected socket} socket 
 */

function connect(socket,io){
    socket.on("join",(user)=>{
        chatUsersAPI.addNewUser(socket,io,user);
    })

    socket.on("msg",(msg,meetingId,sender)=>{
        console.log("msg",msg,sender)
        socket.to(meetingId).emit("msg",msg,socket.id,sender)
    })

    // private messaging
    socket.on("private_message",(id,msg)=>{
        socket.to(id).emit("private_message",msg,socket.id)
    })
    socket.on("disconnect_me",()=>{        
        // do something
    })
    socket.on("disconnect",()=>{
        chatUsersAPI.removeUser(socket)
    })
}

const chatAPI = {
    connect:connect
}
module.exports = chatAPI;