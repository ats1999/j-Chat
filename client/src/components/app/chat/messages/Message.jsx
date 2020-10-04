import React from 'react'
import { Viewer } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
function Message({msg,sender,currentUserSocketId}) {
    console.log("Signel msg,,,",msg)
return <li>{msg}</li>
}

export default Message
