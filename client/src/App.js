import React from 'react';
import Home from "./components/layout/Home";
// aPp
import Chat from "./components/app/Chat";

import { BrowserRouter as Router,Route } from 'react-router-dom';

import "./App.css";

function App() {
  return <>
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/chat" exact component={Chat}/>
    </Router>
  </>
}

export default App;
