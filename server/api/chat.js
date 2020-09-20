/**
 * This functon will notify all other users, that a user has joined the  chat.
 * @param {newly connected socket} socket 
 */

function connect(socket,io){
    console.log("A user arrives!!")
    socket.on("join",(user)=>{
        console.log("Join fired",user)
        socket.join(user.id);
        socket.to(user.id).emit("new user joins",`${user.displayName} has joined this meeting.`)
    })

    socket.on("msg",(msg)=>{
        console.log("Got message from the client")
    })
    socket.on("disconnect",()=>{
        console.log("A user leaves!");
    })

}

const chatAPI = {
    connect:connect
}
module.exports = chatAPI;