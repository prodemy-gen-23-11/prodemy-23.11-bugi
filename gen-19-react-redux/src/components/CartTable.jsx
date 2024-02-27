import React from "react";
import toRupiah from "../utils/formatter";

function CartTable({ data }) {
    let totalPrice = 0;
    let totalDiscount = 0;
    let grandTotal = 0;

    return (
        <div className="relative">
            <table className="w-full my-2">
                <thead>
                    <tr>
                        <th className="font-normal text-left">Product</th>
                        <th></th>
                        <th className="font-normal text-left">Price</th>
                        <th className="font-normal text-left">Quantity</th>
                        <th className="font-normal text-right">Total</th>
                    </tr>
                </thead>
                <tbody className="border-y border-gray-300">
                    {
                        data?.length > 0 ? (
                            data?.map((item, index) => {
                                const priceDiscount = item?.price * ((100 - item?.discount) / 100)
                                totalPrice += (item?.price * item?.quantity);
                                totalDiscount += ((priceDiscount - item?.price) * item?.quantity);
                                grandTotal += (priceDiscount * item?.quantity);

                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item?.imageUrl} className="h-32 w-32" />
                                        </td>
                                        <td className="w-2/5 text-lg font-bold">{item?.name}</td>
                                        <td>
                                            <span className="mx-2 text-md line-through">{toRupiah(item?.price)}</span>
                                            <span className="mx-2 text-md font-bold">{toRupiah(priceDiscount)}</span>
                                        </td>
                                        <td className="font-bold">{item?.quantity}</td>
                                        <td className="text-right">
                                            {<span className="text-md font-bold">{toRupiah(priceDiscount * item?.quantity)}</span>}
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <div className="py-8">
                                <p>Your cart is empty</p>
                            </div>
                        )
                    }
                </tbody>
            </table>

            <div className="absolute w-2/5 right-0">
                <div className="flex flex-row justify-between py-1">
                    <p>Total</p>
                    <p>{toRupiah(totalPrice)}</p>
                </div>
                <div className="flex flex-row justify-between py-1">
                    <p>Total Discount</p>
                    <p>{toRupiah(totalDiscount)}</p>
                </div>
                <div className="flex flex-row justify-between py-1">
                    <p className="font-bold">Grand Total</p>
                    <p className="font-bold">{toRupiah(grandTotal)}</p>
                </div>
                <button className="w-full h-10 rounded-md my-1 bg-sky-400 text-zinc-50 font-bold hover:bg-sky-600 hover:scale-105 duration-300">Checkout</button>
            </div>
        </div>
    );
};

export default CartTable;