import React,{useState} from 'react'

function JoinChatGruoup(props) {
    const [name,setName] = useState("");
    const [id,setId] = useState("");
    return (
        <div>
            <h1>JoinChatGruoup</h1>
            <input type="text" 
                onChange={(e)=>setName(e.target.value)} 
                placeholder="Enter display name!"/>

            <input 
            type="text" 
            onChange={(e)=>setId(e.target.value)}
            placeholder="Your id..." />

            <button onClick={(e)=>props.history.push(`/chat?name=${name}&id=${id}`)}>JoinChatGruoup</button>
        </div>
    )
}

export default JoinChatGruoup
