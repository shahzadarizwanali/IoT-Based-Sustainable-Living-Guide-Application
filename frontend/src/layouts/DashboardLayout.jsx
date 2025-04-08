import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../components/Navbar2";


const DashboardLayout = () => {
    return (
        <>
            <Navbar2 />
            <Outlet />
        </>
    );
};

export default DashboardLayout;
