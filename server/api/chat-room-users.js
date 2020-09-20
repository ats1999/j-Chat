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
 * @param {meetingId of the user} meetingId 
 * @return {room} new room which contains newwly added user. 
 */
function addnNewUser(userName, userId,meetingId){
    const room = getRoom(meetingId);
    
    // add new user
    room.users.push({userId,userName});
    return room;
}

/**
 * This function will remove the user from the chat room
 * @param {socket id of the user to remove} userIdToRemove 
 * @param {meeting id of the user to remove} meetingId 
 */
function removeUser(userIdToRemove,meetingId){
    let users = getRoom(meetingId).users;
    var i = 0;
    for(; i<userId.length; i++){
        if(users[i].userId == userIdToRemove)
            break;
    }

    delete users[i];
    
    return getRoom(meetingId);
}

/**
 * This function will get all the users of the current room.
 * @param {meeting id } meetingId 
 */
function getUsers(meetingId){
    return getRoom(meetingId).users;
}