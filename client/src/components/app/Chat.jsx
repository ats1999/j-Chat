import React from 'react'
import ActiveUsers from "./users/ActiveUsers";
import ChatApp from "./chat/ChatApp";
import Dahsboard from "./dashboard/Dashboard";
import "./style/chat.css";
function Chat() {
    return <div className="chat">
        <ActiveUsers/>
        <ChatApp/>
        <Dahsboard/>
    </div>
}

export default Chat
