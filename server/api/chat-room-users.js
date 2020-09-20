const chatServer = require("./chat-events");
let chatRooms = [
    {
        meetingId:Number,
        users:[{
            userId:Number,
            userName:String
        }]
    }
]

/**
 * This function will return all the information regarding this room.
 * @param {meeting id of the room} meetingId 
 * @returm {room} room associated with meetingId 
 */
function getRoom(meetingIdOfRoom){
    let  room = null;
    for(var i=0; i<chatRooms.length; i++){
        if(chatRooms[i].meetingId === meetingIdOfRoom)
            room = chatRooms[i];
    }
    return room;
}
/**
 * This function will add a new user to the users array.
 * @param {name of the new user} userName 
 * @param {socket id of the new user} userId 
 * @param {socket} socket of the user
 * @param {meetingId of the user} meetingId 
 * @return {room} new room which contains newwly added user. 
 */
function addNewUser(socket,io,user){
    // join user in room
    socket.join(user.meetingId,()=>{
        let rooms = Object.keys(socket.rooms);
    console.log(rooms);
    });
    // get all clients in room named "user.meetingId"
    io.in(user.meetingId).clients((err,clients)=>{
        if(err)
            throw err;
        socket.to(user.meetingId).emit(chatServer.newClientConnected,
            {clients:clients,newUser:user.displayName})
    })
}

/**
 * This function will remove the user from the chat room
 * @param {socket id of the user to remove} userIdToRemove 
 * @param {meeting id of the user to remove} meetingId 
 */
function removeUser(userIdToRemove,meetingId){
    // let users = getRoom(meetingId).users;
    // var i = 0;
    // for(; i<userId.length; i++){
    //     if(users[i].userId == userIdToRemove)
    //         break;
    // }

    // delete users[i];
    
    // users = getRoom(meetingId).users;
    // socket.to(meetingId).emit(chatServer.clientWantsToDisconnect,users);
}

/**
 * This function will get all the users of the current room.
 * @param {meeting id } meetingId 
 */
function getUsers(meetingId){
    // return getRoom(meetingId).users;
}

/**
 * Recieve incommeing message.
 * @param {*} socket 
 * @param {*} msg 
 * @param {*} userName 
 */
function cllientSentMessage(socket,msg,userName){
    // console.log(socket.room)
}
module.exports = {
    getRoom,
    getUsers,
    addNewUser,
    removeUser
}