import React from 'react'
import "./style/chat-app.css";
function ChatApp() {
    return (
        <div className="chat__app">
            <h1 >
                Chat app
            </h1>
            <div className="chat_room"> 
                <input type="text" id="chat-area"/>
                <button>Send</button>
            </div>
        </div>
    )
}

export default ChatApp
