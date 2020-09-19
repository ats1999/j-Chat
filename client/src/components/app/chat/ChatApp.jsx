import React, {useState} from 'react';
import "./style/chat-app.css";
import io from "./io.js";

function ChatApp({name,id}) {
    let [texts,setTexts] = useState(["Welcome!"]);
    let [userText,setUserText] = useState(null); 

    function handleSubmit(){
        console.log("Handle submit")
        const msg = {
            senderId:id,
            senderName:name,
            msg:userText
        }
        io.emit("msg",msg);
        let newVal = texts;
        newVal=newVal.push(userText)
        setTexts(texts.push(newVal))
    }

    io.on("message",(msg)=>{
        console.log("message--------",msg)
    })
    io.on("room",(msg)=>{
        console.log(`Message ====== ${msg}`);
        
    })
    return (
        <div className="chat__app">
            {/* <div className="app">
                <ul>{texts.map(text=>{
                    return <li>{text}</li>
                })}</ul>
            </div> */}
            <div className="chat_room"> 
                <input onChange={(e)=>setUserText(e.target.value)} type="text" id="chat-area"/>
                <button onClick={()=>handleSubmit()}>Send</button>
            </div>
        </div>
    )
}

export default ChatApp
