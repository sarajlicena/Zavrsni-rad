import React from "react";
import '../App.css'
import '../styles/components/SidebarMenu.css'
import SidebarMenu from "../components/SidebarMenu";
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
       <div className="page">
        <div id="side">
            <SidebarMenu />
        </div>

        <div id="main">
            <LoginForm />
        </div>
       </div>
    )
}

export default LoginPage;