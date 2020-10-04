import React, {useState,useEffect,useRef} from 'react';
import "./style/chat-app.css";
import socket from "./io.js";
import { css } from 'emotion';
import ScrollToBottom from 'react-scroll-to-bottom';
import Messages from "./messages/Messages";
import { Editor,Viewer } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from "axios";

const ROOT_CSS = css({
    height: "68vh",
    width: "100%",
    borderBottom:"1px solid gray"
});

function ChatApp({name,id,handleOnlineUsers}) {
    let displayName = name;
    let meetingId = id;
    const editorRef = useRef(null);
    let [messages,setMessages] = useState([]);
    let [message,setMessage] = useState(""); 
    let [onlineUsers,setOnlineUsers] = useState(new Map());
    const [socketId,setSocketId] = useState("");
    const [privateMessage,setPrivateMessage] = useState(new Map());

    useEffect(() => {
        socket.on("connect",()=>{
            setSocketId(socket.id);
            socket.emit("join",{displayName,meetingId});
        })
    }, [socketId]);

    useEffect(()=>{
        handleOnlineUsers(onlineUsers);

        socket.on("new_user_arrives",(onlineUsers)=>{
            setOnlineUsers(new Map(JSON.parse(onlineUsers)))
        })
    },[onlineUsers]);

    useEffect(() => {       
        socket.on("msg",(msg,socketId,sender)=>{
            let curMessages = messages;
            curMessages.push({msg:msg,socketId:socketId,sender:sender});
            setMessages(curMessages);
            console.log("Got message ",msg)
        })
    }, [messages]);

    useEffect(() => {
        socket.on("private_message",(msg,id)=>{
            console.log(msg,id)
        })
    }, [privateMessage]);
    
    function handleSubmit(e){
        e.preventDefault();
        const msg = editorRef.current.getInstance().getMarkdown();
        socket.emit("msg",msg,meetingId,displayName)
        const curMessage = {
            msg:msg,
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
                <Messages messages={messages} currentUserSocketId={socketId}/>
            </ScrollToBottom>
            <div className="chat__room">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={(e)=>handleSubmit(e)} variant="contained" color="primary">
                        Send <SendIcon/>
                    </Button>

                    <Button variant="text" color="primary">
                        Contribute &#128079;
                    </Button>
                </ButtonGroup>
            <Editor
                previewStyle="tab"
                height="30vh"
                initialEditType="markdown"
                initialValue={"# Welcom To Rocket...Let's rock..."}                       
                usageStatistics={false}
                ref={editorRef}
                language = "en"
            />
            </div>
        </div>
    )
}

export default ChatApp
