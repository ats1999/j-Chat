const chatClient = {
    // to the server
    iWantToJoin:"join",
    sendMessage:"msg",
    iWantToLeave:"disconnect",
    sendPrivateMessage:"private message",

    // from server
    aClientSentMessage:"msg",
    newClientConnected:"new user arrives",
    gotPrivateMessage:"private message",
    aClientDisconnected:"a client disconnected"
}
module.exports = chatClient;