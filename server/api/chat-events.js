const chatServer= {
    // from client
    newClientWantsToJoin:"join",
    aClientSentMessage:"msg",
    clientWantsToDisconnect:"disconnect me",
    aClientSentPrivateMessage:"private message",

    // to the client 
    newClientConnected:"new user arrives",
    sendPrivateMessage:"private message"
}

module.exports = chatServer