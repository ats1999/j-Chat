const chatServer = require("./chat-events");
let onlineUsers = new Map();

function addNewUser(socket,io,user){
    // join user in room
    socket.join(user.meetingId,()=>{
        const userInfo = {
            userName:user.displayName,
            roomName:user.meetingId
        }
        onlineUsers.set(socket.id,userInfo);
        socket.to(user.meetingId).emit(chatServer.newClientConnected,
            {clients:onlineUsers,newUser:user.displayName}) 
    });
}

function removeUser(socket,io){
    const userInfo = onlineUsers.get(socket.id);
    socket.to(userInfo.roomName).emit(chatServer.aClientDisconnected,userInfo.userName);
    onlineUsers.delete(socket.id);
}


function getUsers(meetingId){
    // return getRoom(meetingId).users;
}


function cllientSentMessage(socket,msg,userName){
    // console.log(socket.room)
}
module.exports = {
    getUsers,
    addNewUser,
    removeUser
}