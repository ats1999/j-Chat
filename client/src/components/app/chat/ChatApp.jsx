import React, {useState,useEffect} from 'react';
import "./style/chat-app.css";
import socket from "./io.js";
import { css } from 'emotion';
import ScrollToBottom from 'react-scroll-to-bottom';
import Messages from "./messages/Messages";

const ROOT_CSS = css({
    height: 400,
    width: 400
  });

function ChatApp({name,id,handleOnlineUsers}) {
    let displayName = name;
    let meetingId = id;

    let [messages,setMessages] = useState([]);
    let [message,setMessage] = useState(""); 
    let [onlineUsers,setOnlineUsers] = useState(new Map());
    const [socketId,setSocketId] = useState("");

    socket.on("connect",()=>{
        setSocketId(socket.id)
    })
    
    useEffect(()=>{
        handleOnlineUsers(onlineUsers);
    },[onlineUsers])

    useEffect(()=>{
        socket.emit("join",{displayName,meetingId});
    },[])
    
    socket.on("new_user_arrives",(onlineUsers)=>{
        setOnlineUsers(new Map(JSON.parse(onlineUsers)))
    })

    socket.on("msg",(msg,socketId,sender)=>{
        let curMessages = messages;
        curMessages.push({msg:msg,socketId:socketId,sender:sender});
        setMessages(curMessages);
        console.log("How may messages",messages.length)
    })

    socket.on("private_message",(msg,id)=>{
        console.log(msg,id)
    })

    function handleSubmit(e){
        e.preventDefault();

        socket.emit("msg",message,meetingId,displayName)
        const curMessage = {
            msg:message,
            sender:displayName,
            socketId:socketId
        }
        let curMessages = messages;
        curMessages.push(curMessage);
        setMessages(curMessages)
        setMessage("");
    }

    return (
        <div className="chat__app">
            <ScrollToBottom className={ROOT_CSS}>
                {/* <Messages messages={messages} currentUserSocketId={socketId}/> */}
            </ScrollToBottom>
            <div className="chat__room">
                <textarea onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Send message..."></textarea>
                <button id="send__message__button" onClick={(e)=>handleSubmit(e)}>Send</button>
            </div>
        </div>
    )
}

export default ChatApp
