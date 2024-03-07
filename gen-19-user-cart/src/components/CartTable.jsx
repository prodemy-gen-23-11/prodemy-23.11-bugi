import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { quantityIncreaseAction, quantityDecreaseAction, removeItemAction, fillFromApi } from "../store/reducers/cartSlice";
import toRupiah from "../utils/formatter";

function CartTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cartData } = useSelector((state) => state.cart);

    const quantityIncrease = (id) => {
        dispatch(quantityIncreaseAction({id: id}));
    }

    const quantityDecrease = (id) => {
        dispatch(quantityDecreaseAction({id: id}));
    }

    const removeItem = (id) => {
        dispatch(removeItemAction({id: id}));
    }

    const onClickRedirectCheckout = () => {
        navigate("/checkout");
    }

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
                        <th className="font-normal text-left">Total</th>
                        <th className="font-normal text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="border-y border-gray-300">
                    {
                        cartData?.length > 0 ? (
                            cartData?.map((item, index) => {
                                const priceDiscount = item?.price * ((100 - item?.discount) / 100)
                                totalPrice += (item?.price * item?.quantity);
                                totalDiscount += ((priceDiscount - item?.price) * item?.quantity);
                                grandTotal += (priceDiscount * item?.quantity);

                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item?.imageUrl} className="h-32 w-32" />
                                        </td>
                                        <td className="w-1/3 text-lg">{item?.name}</td>
                                        <td className="pt-5">
                                            <p className="mx-2 text-md">{toRupiah(priceDiscount)}</p>
                                            <p className="mx-2 text-sm line-through">{toRupiah(item?.price)}</p>
                                        </td>
                                        <td className="">
                                            <div className="flex flex-row justify-between h-10 w-32 bg-gray-200 rounded-full">
                                                <div onClick={() => quantityDecrease(item?.id)} className="h-inherit w-10 py-2 bg-gray-300 rounded-full text-center cursor-pointer hover:bg-gray-400 duration-200">
                                                    <p className="font-bold">-</p>
                                                </div>
                                                <p className="py-2 font-bold">{item?.quantity}</p>
                                                <div onClick={() => quantityIncrease(item?.id)} className="h-inherit w-10 py-2 bg-gray-300 rounded-full text-center cursor-pointer hover:bg-gray-400 duration-200">
                                                    <p className="font-bold">+</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            {<span className="text-md">{toRupiah(priceDiscount * item?.quantity)}</span>}
                                        </td>
                                        <td className="text-right">
                                            <button
                                                className="button-admin bg-red-400 hover:bg-red-600 duration-200"
                                                onClick={() => removeItem(item?.id)} >
                                                Remove
                                            </button>
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
                <button onClick={onClickRedirectCheckout} className="w-full h-10 rounded-md my-1 bg-sky-400 text-zinc-50 font-bold hover:bg-sky-600 hover:scale-105 duration-300">Checkout</button>
            </div>
        </div>
    );
};

export default CartTable;