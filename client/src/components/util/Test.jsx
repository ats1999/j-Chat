import React,{useState} from 'react'
import axios from "axios";

function Test() {
    const [data,setData] = useState("");
    function load(){
        axios.get("/test")
        .then(res=>{
            setData(res.status);
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return (
        <div>
            <h1>Data: {data}</h1>
            <button onClick={(e)=>load()}>Click</button>
        </div>
    )
}

export default Test
