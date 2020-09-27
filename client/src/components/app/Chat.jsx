import React ,{useState} from 'react'
import ActiveUsers from "./users/ActiveUsers";
import ChatApp from "./chat/ChatApp";
import Dahsboard from "./dashboard/Dashboard";
import "./style/chat.css";
function Chat(props) {
    const query = new URLSearchParams(props.location.search)
    let [onlineUsers,setOnlineUsers] = useState([]);

    function handleOnlineUsers(curOnlineUsers){
        setOnlineUsers(curOnlineUsers);
    }
    return <div className="chat">
        <ActiveUsers onlineUsers={onlineUsers}/>
        <ChatApp 
            name={query.get("name")} 
            id={query.get("id")} 
            handleOnlineUsers={handleOnlineUsers}
        />
        <Dahsboard/>
    </div>
}

export default Chat
