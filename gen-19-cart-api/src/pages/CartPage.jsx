import React from "react";
import Navbar from "../components/Navbar";
import Content from "../layouts/Content";
import CartTable from "../components/CartTable";

function CartPage() {
    return (
        <>
            <Navbar />
            <Content>
                <div className="w-4/5 mx-auto">
                    <h1 className="text-2xl font-bold">My Shopping Cart</h1>

                    <CartTable />
                </div>
            </Content>
        </>
    );
}

export default CartPage;