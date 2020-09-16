import React from 'react';
import SidebarOption from './SidebarOption';
import { FiberManualRecord, CreateOutlined,InsertCommentRounded } from '@material-ui/icons';
import './style/side-bar.css';

function SideBar(){
    return <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h1>Rahul kumar</h1>
                    <h3>
                        <FiberManualRecord/>
                        Chat app
                    </h3>
                </div>
                <CreateOutlined/>

                <SidebarOption Icon={InsertCommentRounded} title="Threads"/>
                <SidebarOption Icon={InsertCommentRounded} title="Quazi"/>
                <SidebarOption Icon={InsertCommentRounded} title="Threads"/>
                <SidebarOption Icon={InsertCommentRounded} title="Quazi"/>
                <SidebarOption Icon={InsertCommentRounded} title="Threads"/>
                <SidebarOption Icon={InsertCommentRounded} title="Quazi"/>
                <SidebarOption Icon={InsertCommentRounded} title="Threads"/>
                <SidebarOption Icon={InsertCommentRounded} title="Quazi"/>
            </div>
    </div>
}
export default SideBar;