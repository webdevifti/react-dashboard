import React from 'react'
import './sidebar.css'
import logo from '../../assets/images/logo.png'
import sidebarItems from '../../assets/JsonData/sidebar_routes.json'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="Company logo" />
            </div>
            <ul className="sidebar-navigation">

                {
                    sidebarItems.map((item, index) => (
                        <div key={index} className="sidebar-menu">
                            <NavLink  activeclassname="active" to={item.route}><span className={item.icon}></span>{item.display_name}</NavLink>
                        </div>
                    ))
                }
            </ul>
         
        </div>
    )
}

export default Sidebar
