import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoutes() {
    const isGuest = useSelector((state) => state.auth.token == "");

    if (isGuest) {
        return <Outlet />;
    }

    return <Navigate to="/" />;
}