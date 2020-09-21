import React, {useState,useEffect} from 'react';
import "./style/chat-app.css";
import socket from "./io.js";
import chatClient from "./chat-event";
import { css } from 'emotion';
import ScrollToBottom from 'react-scroll-to-bottom';


const ROOT_CSS = css({
    height: 600,
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
        socket.emit(chatClient.iWantToJoin,{displayName,meetingId});
    },[])
    
    socket.on(chatClient.newClientConnected,(onlineUsers)=>{
        setOnlineUsers(new Map(JSON.parse(onlineUsers)))
        console.log("Chat App",onlineUsers)
    })

    socket.on(chatClient.aClientSentMessage,(msg,socketId)=>{
        let curMessages = messages;
        messages.push({msg:msg,socketId:socketId});
        setMessages(curMessages);
    })

    socket.on(chatClient.gotPrivateMessage,(msg,id)=>{
        console.log(msg,id)
    })

    function handleSubmit(e){
        e.preventDefault();

        socket.emit(chatClient.sendMessage,message,meetingId)
        const curMessage = {
            msg:message,
            sender:displayName,
            socketId:socketId
        }
        let curMessages = messages;
        curMessages.push(curMessage);
        setMessages(curMessages)
        setMessage("");
        console.log(messages)
    }

    return (
        <div className="chat__app">
            <ScrollToBottom className={ROOT_CSS}>
            </ScrollToBottom>
            <div className="chat__room">
                <textarea onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Send message..."></textarea>
                <button id="send__message__button" onClick={(e)=>handleSubmit(e)}>Send</button>
            </div>
        </div>
    )
}

export default ChatApp
