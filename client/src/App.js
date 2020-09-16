import React from 'react';
import SideBar from './components/layout/SideBar';
import Header from './components/layout/Header';

import "./App.css";

function App() {
  return (
    <div className="">
      <Header/>
      <div className="app__body">
        <SideBar/>
        {/* Chat app */}
      </div>
    </div>
  );
}

export default App;
