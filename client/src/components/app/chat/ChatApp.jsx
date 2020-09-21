import React, {useState,useEffect} from 'react';
import "./style/chat-app.css";
import socket from "./io.js";
import chatClient from "./chat-event";

function ChatApp({name,id}) {
    let [messages,setMessages] = useState(["Welcome!"]);
    let [message,setMessage] = useState(""); 
    let displayName = name;
    let meetingId = id;
    useEffect(()=>{
        socket.emit(chatClient.iWantToJoin,{displayName,meetingId});
    },[])

    socket.on(chatClient.newClientConnected,(clients)=>{
        console.log(clients)
    })

    socket.on(chatClient.aClientSentMessage,(msg,id)=>{
        console.log(msg,id)
    })

    socket.on(chatClient.gotPrivateMessage,(msg,id)=>{
        console.log(msg,id)
    })

    function handleSubmit(){
        socket.emit(chatClient.sendMessage,message,meetingId)
        setMessage("");
    }

    return (
        <div className="chat__app">
            {/* <div className="app">
                <ul>{texts.map(text=>{
                    return <li>{text}</li>
                })}</ul>
            </div> */}
            <div className="chat_room"> 
                <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" id="chat-area"/>
                <button onClick={()=>handleSubmit()}>Send</button>
            </div>
        </div>
    )
}

export default ChatApp
