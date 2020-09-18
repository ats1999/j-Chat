import React from 'react';
import Home from "./components/layout/Home";
// aPp
import Chat from "./components/app/Chat";

import { BrowserRouter as Router,Route } from 'react-router-dom';

// Auth
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Forgot from "./components/auth/Forgot";

import JoinChatGruoup from "./components/app/chat/JoinChatGruoup";
import "./App.css";

function App() {
  return <>
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/chat" exact component={Chat}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={SignUp}/>
      <Route path="/forgot" exact component={Forgot}/>
      <Route path="/join" component={JoinChatGruoup}/>
    </Router>
  </>
}

export default App;
