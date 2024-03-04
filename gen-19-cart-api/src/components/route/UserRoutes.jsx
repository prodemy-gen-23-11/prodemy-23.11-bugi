import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function UserRoutes() {
    const isUser = useSelector((state) => state.auth.token != "");

    if (isUser) {
        return <Outlet />;
    }

    return <Navigate to="/login" />;
}