import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes() {
    const isAdmin = useSelector((state) => state.auth.token != "" && state.auth.user.role == "admin");

    if (isAdmin) {
        return <Outlet />;
    }
    alert("You don't have the permission to access this page!");
    return <Navigate to="/" />;
}