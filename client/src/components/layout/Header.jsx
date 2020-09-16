import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { AccessTime, HelpOutline, SearchOutlined } from '@material-ui/icons';
import './style/header.css';
function Header(){
    return <div className="header">
        <div className="header__left">
            {/* avatar for logged in user */}
            <Avatar
                className="header_avatar"
                alt={"Rahul"}
                src={"https://upload.wikimedia.org/wikipedia/commons/b/be/Wikimedia_and_Libraries_User_Group_logo.svg"}
            />
            {/* time icon */}
            <AccessTime/>
        </div>

        <div className="header__search">
            {/* Search Icon */}
            <SearchOutlined/>
            {/* input */}
            <input type="text" 
                placeholder="Search Dev's!"
                className="header__search"/>
        </div>

        <div className="header__right">
            {/* help  icon */}
            <HelpOutline/>
        </div>
    </div>
}

export default Header;