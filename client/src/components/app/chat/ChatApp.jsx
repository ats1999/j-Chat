import React, {useState} from 'react';
import "./style/chat-app.css";
import io from "./io.js";

function ChatApp({name,id}) {
    const [texts,setTexts] = useState(null);
    const [userText,setUserText] = useState(null);
    if(texts){
        texts = texts.map((text,index)=>{
           return  <li key={index}>{text}</li>
        })
    }
    function handleSubmit(){
        console.log("Handle submit")
        io.emit("msg",userText);
    }
    return (
        <div className="chat__app">
            <div className="app">
                <ul>{texts}</ul>
            </div>
            <div className="chat_room"> 
                <input onChange={(e)=>setUserText(e.target.value)} type="text" id="chat-area"/>
                <button onClick={()=>handleSubmit()}>Send</button>
            </div>
        </div>
    )
}

export default ChatApp
