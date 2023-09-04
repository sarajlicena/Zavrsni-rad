import React from "react";
import '../App.css'
import '../styles/components/SidebarMenu.css'
import SidebarMenu from "../components/SidebarMenu";
import Profile from '../components/Profile'

function ProfilePage() {
    return (
       <div className="page">
        <div id="side">
            <SidebarMenu />
        </div>

        <div id="main">
            <Profile />
        </div>
       </div>
    )
}

export default ProfilePage;