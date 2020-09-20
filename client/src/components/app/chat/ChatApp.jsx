import React, {useState,useEffect} from 'react';
import "./style/chat-app.css";
import socket from "./io.js";

function ChatApp({name,id}) {
    let [messages,setMessages] = useState(["Welcome!"]);
    let [message,setMessage] = useState(null); 
    let displayName = name;
    let meetingId = id;
    useEffect(()=>{
        socket.emit("join",{displayName,meetingId});
    },[])

    socket.on("new user joins",msg=>console.log(msg))
    function handleSubmit(){
        
    }

    return (
        <div className="chat__app">
            {/* <div className="app">
                <ul>{texts.map(text=>{
                    return <li>{text}</li>
                })}</ul>
            </div> */}
            <div className="chat_room"> 
                <input onChange={(e)=>setMessage(e.target.value)} type="text" id="chat-area"/>
                <button onClick={()=>handleSubmit()}>Send</button>
            </div>
        </div>
    )
}

export default ChatApp
