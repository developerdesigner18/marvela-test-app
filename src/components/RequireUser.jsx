import React from "react";
import { Navigate, Outlet } from "react-router";

const RequireUser = () => {

    const token = JSON.parse(localStorage.getItem("Token"));

    return (
        <div>
            {
                token ? <Outlet /> : <Navigate to='/signin' />
            }
        </div>
    )
};

export default RequireUser;
