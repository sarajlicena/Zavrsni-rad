import React from "react";
import '../App.css'
import '../styles/components/SidebarMenu.css'
import SignupForm from '../components/SignupForm'
import SidebarMenu from "../components/SidebarMenu";

function SignupPage() {
    return (
       <div className="page">
        <div id="side">
            <SidebarMenu />
        </div>

        <div id="main">
            <SignupForm />
        </div>
       </div>
    )
}

export default SignupPage;