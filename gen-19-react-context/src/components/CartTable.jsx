import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toRupiah from "../utils/formatter";

function CartTable() {
    const { cartData } = useContext(CartContext);

    const priceDiscount = cartData.productPrice * ((100 - cartData.productDiscount) / 100);

    return (
        <div className="relative">
            <table className="w-full my-2">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Quantity</th>
                        <th className="text-right">Total</th>
                    </tr>
                </thead>
                <tbody className="border-y border-gray-300">
                    <tr>
                        <td>
                            <img src={cartData.productImage} className="h-32 w-32" />
                        </td>
                        <td className="w-2/5 text-lg font-bold">{cartData.productName}</td>
                        <td>
                            <span className="mx-2 text-md line-through">{toRupiah(cartData.productPrice)}</span>
                            <span className="mx-2 text-md font-bold">{toRupiah(priceDiscount)}</span>
                        </td>
                        <td className="font-bold">{cartData.quantity}</td>
                        <td className="text-right">
                            {<span className="text-md font-bold">{toRupiah(priceDiscount * cartData.quantity)}</span>}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="absolute w-2/5 right-0">
                <div className="flex flex-row justify-between py-1">
                    <p>Total</p>
                    <p>{toRupiah(cartData.productPrice * cartData.quantity)}</p>
                </div>
                <div className="flex flex-row justify-between py-1">
                    <p>Product Discount</p>
                    <p>{toRupiah((priceDiscount - cartData.productPrice) * cartData.quantity)}</p>
                </div>
                <div className="flex flex-row justify-between py-1">
                    <p className="font-bold">Grand Total</p>
                    <p className="font-bold">{toRupiah(priceDiscount * cartData.quantity)}</p>
                </div>
                <button className="w-full h-10 rounded-md my-1 bg-sky-400 text-zinc-50 font-bold hover:bg-sky-600 hover:scale-105 duration-300">Checkout</button>
            </div>
        </div>
    );
};

export default CartTable;