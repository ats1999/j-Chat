const chatServer = require("./chat-events");
const chatUsersAPI = require("./chat-room-users");
/**
 * This functon will notify all other users, that a user has joined the  chat.
 * @param {newly connected socket} socket 
 */

function connect(socket,io){
    socket.on(chatServer.newClientWantsToJoin,(user)=>{
        chatUsersAPI.addNewUser(socket,io,user);
    })

    socket.on(chatServer.aClientSentMessage,(msg,meetingId)=>{
        socket.to(meetingId).emit(chatServer.aClientSentMessage,msg,socket.id)
    })

    // private messaging
    socket.on(chatServer.aClientSentPrivateMessage,(id,msg)=>{
        socket.to(id).emit(chatServer.sendPrivateMessage,msg,socket.id)
    })
    socket.on(chatServer.clientWantsToDisconnect,()=>{        
        let rooms = Object.keys(socket.rooms); console.log(rooms)
    })
    socket.on(chatServer.aClientDisconnected,()=>{
        chatUsersAPI.removeUser(socket)
    })
}

const chatAPI = {
    connect:connect
}
module.exports = chatAPI;