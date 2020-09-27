import React from 'react'

function Messages({messages,currentUserSocketId}) {
    console.log(messages);
    let render=null;
    render=messages.map((msg,index)=>{
        return <li>
            <p>{msg.msg} - {msg.sender}</p>
        </li>
    })
    return (
        <div>
        <h1>Messages</h1>
            {render}
        </div>
    )
}

export default Messages
