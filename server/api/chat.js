/**
 * This functon will notify all other users, that a user has joined the  chat.
 * @param {newly connected socket} socket 
 */
function connect(socket){
    console.log("A user has been connected!")

    socket.on("disconnect",()=>{
       console.log("A user disconnected!");
    })

    socket.on("join",()=>{
        console.log("JOIned!!!")
    })
   // register event
   socket.on("msg",(msg)=>{
        console.log(`Got the message ${msg}`);

        // emit this message to everyone eles in the grouup
        socket.broadcast.emit("msg",msg);
    })
    socket.on("msg",test);
}

function test(data){
    console.log(`Test ${data}`)
}
const chatAPI = {
    connect:connect
}
module.exports = chatAPI;