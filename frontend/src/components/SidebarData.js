import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },

    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        link: "/profile"
    },

    {
        title: "My data",
        icon: <SsidChartIcon />,
        link: "/myData"
    },

    {
        title: ""
    },

    {
        title: ""
    },

    {
        title: ""
    },

    {
        title: ""
    },

    {
        title: ""
    },

    {
        title: ""
    },

    {
        title: "Signup",
        icon: <HowToRegIcon />,
        link: "/signup"
    },

    {
        title: "Signin",
        icon: <LoginIcon />,
        link: "/login"
    }
] 
