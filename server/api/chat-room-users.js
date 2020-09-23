const chatServer = require("./chat-events");
let onlineUsers = new Map();

function addNewUser(socket,io,user){
    // join user in room
    try{
        socket.join(user.meetingId,()=>{
            const userInfo = {
                userName:user.displayName,
                roomName:user.meetingId
            }
            onlineUsers.set(socket.id,userInfo);
            console.log(onlineUsers);
            const curOnlineUsers = JSON.stringify(Array.from(onlineUsers))
            io.to(user.meetingId).emit(chatServer.newClientConnected,curOnlineUsers ) 
        });
    }catch(e){
        console.log("While addUser()->",e)
    }
}

function removeUser(socket){
  try{
    const userInfo = onlineUsers.get(socket.id);

    onlineUsers.delete(socket.id);
    // socket.to(userInfo.roomName).emit(chatServer.aClientDisconnectedSendThisInfo,userInfo.userName);
  }catch(e){
      console.log("While removeUser()->",e)
  }
}

function cllientSentMessage(socket,msg,userName){
    // console.log(socket.room)
}
module.exports = {
    addNewUser,
    removeUser
}