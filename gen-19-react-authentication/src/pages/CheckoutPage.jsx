import React from "react";
import { useSelector } from "react-redux";
import Content from "../layouts/Content";

function CheckoutPage() {
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.token !== "");

    return (
        <>
            <Content>
                <h1>Hello {user.name} from checkout page!</h1>
            </Content>
        </>
    )
}

export default CheckoutPage;