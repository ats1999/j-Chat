import React from 'react'
import ActiveUsers from "./ActiveUsers";
import ChatApp from "./ChatApp";
import Dahsboard from "./Dashboard";
import "./style/chat.css";
function Chat() {
    return <div className="chat">
        <ActiveUsers/>
        <ChatApp/>
        <Dahsboard/>
    </div>
}

export default Chat
