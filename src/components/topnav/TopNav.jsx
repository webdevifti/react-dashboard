import React from 'react'
import { Link } from 'react-router-dom';
import './topnav.css'
import Dropdown from '../dropdown/Dropdown'
import ThemeMenu from '../thememenu/ThemeMenu';
import NotificationData from '../../assets/JsonData/notification.json'
import userImage from '../../assets/images/user.jpg'
import userMenu from '../../assets/JsonData/user_menus.json'

const renderNotificationItem = (item, index) => (
    <div className="notification-items" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)
const currentUser = {
    display_name: "webdevifti",
    image: userImage
}
const renderUserToggle = (user) => (
    <div className="topnav-right-user">
        <div className="topnav-right-user-image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav-right-username">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
        <div className="notification-items">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)


const TopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav-search">
                <input type="text" placeholder="Search here..." />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav-right">
                <div className="topnav-right-item">
                    <Dropdown 
                    customToggle={() => renderUserToggle(currentUser) }
                    contentData={userMenu}
                    renderItems={(item,index) => renderUserMenu(item,index)} />
                </div>
                <div className="topnav-right-item">
                    <Dropdown 
                    icon="bx bx-bell"
                    badge="12" 
                    contentData={NotificationData} 
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                    renderFooter={() => <Link to='/'>View All</Link> } />
                </div>
                <div className="topnav-right-item">
                    {/* <Dropdown /> */}
                    <ThemeMenu />
                </div>
            </div>
        </div>
    )
}

export default TopNav
