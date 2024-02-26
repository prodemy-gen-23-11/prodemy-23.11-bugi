import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Content from "../layouts/Content";
import { CartContext } from "../context/CartContext";
import CartTable from "../components/CartTable";

function CartPage() {
    const { cartData } = useContext(CartContext);
    console.log(cartData);

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