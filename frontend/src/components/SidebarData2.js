import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

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
        title: "Logout",
        icon: <LogoutIcon />,
        link: "/"
    }
] 
