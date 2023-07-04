import React from "react";
import { Navigate, Outlet } from "react-router";

const OnlyIfNotLoggedIn = () => {

    const token = JSON.parse(localStorage.getItem("Token"));

    return (
        <div>
            {
                token ? <Navigate to='/' /> : <Outlet />
            }
        </div>
    )
};

export default OnlyIfNotLoggedIn;
