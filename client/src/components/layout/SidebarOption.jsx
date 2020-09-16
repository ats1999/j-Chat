import React from 'react'
import './style/sidebar-option.css';

function SidebarOption({Icon,title}) {
    return (
        <div className="sidebar__option">
            {Icon && <Icon className="sidebar__option__icon"/>}
            {title}
        </div>
    )
}

export default SidebarOption
