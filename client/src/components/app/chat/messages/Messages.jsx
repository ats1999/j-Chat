import React from 'react'
import Message from "./Message";

function Messages({messages,currentUserSocketId}) {
    messages.map((msg,index)=>{
        console.log(index,"->",msg.msg)
    })
    console.log(messages)
    // let render=null;
    // render=messages.map((msg,index)=>{
    //     return <Message
    //         key={index}
    //         msg={msg.msg}
    //         sender={msg.sender}
    //         currentUserSocketId={currentUserSocketId}
    //     />
    // })
    return <ul>
        {messages.map((mag,index)=>{
            return <li key={index}>{mag.msg}</li>
        })}
    </ul>
}

export default Messages
