import React from "react";
import '../App.css'
import '../styles/components/SidebarMenu.css'
import SidebarMenu from "../components/SidebarMenu";
import Home from '../components/Home';

function HomePage() {
    return (
       <div className="page">
        <div id="side">
            <SidebarMenu />
        </div>

        <div id="main">
            <Home />
        </div>
       </div>
    )
}

export default HomePage;