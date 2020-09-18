import React from 'react'
import ActiveUsers from "./users/ActiveUsers";
import ChatApp from "./chat/ChatApp";
import Dahsboard from "./dashboard/Dashboard";
import "./style/chat.css";
function Chat(props) {
    const query = new URLSearchParams(props.location.search)

    return <div className="chat">
        <ActiveUsers/>
        <ChatApp name={query.get("name")} id={query.get("id")}/>
        <Dahsboard/>
    </div>
}

export default Chat
