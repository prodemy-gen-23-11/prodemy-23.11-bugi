import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toRupiah from "../utils/formatter";

function DetailDesc({ productName, productDesc, productPrice, productDiscount, productImage }) {
    const navigate = useNavigate();
    const { setCartData } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    function quantityIncrease() {
        setQuantity(quantity + 1);
    }

    function quantityDecrease() {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    const onClickBuyNow = () => {
        setCartData({ productName, productPrice, productDiscount, productImage, quantity });
        navigate(`/cart`);
    }

    return (
        <div id="desc-container"
            className="flex flex-col w-full text-center mt-8 relative 
                        md:inline-flex md:text-start md:h-[42rem] md:w-[45%] md:mt-0 md:pr-28">
            <h1 className="font-extrabold text-3xl">{productName}</h1>
            <p className="pt-2">{productDesc}</p>
            <p className="pt-1">★★★★★ (121)</p>

            <hr className="my-4" />

            {
                productDiscount != null && productDiscount != 0 ? (
                    <div className="flex flex-row items-baseline gap-2">
                        <h2 className="font-bold text-2xl">{toRupiah(productPrice * ((100 - productDiscount) / 100))}</h2>
                        <div className="px-2 h-6 bg-sky-400 rounded-lg">
                            <h2 className="font-bold text-zinc-50">{productDiscount}% OFF</h2>
                        </div>
                    </div>
                ) : (
                    <h2 className="font-bold text-2xl">{toRupiah(productPrice)}</h2>
                )
            }

            <h3 className="text-lg line-through">{toRupiah(productPrice)}</h3>
            <p className="text-sm pt-1">Cicilan 0% mulai dari Rp 541.250/bulan</p>

            <hr className="my-4" />

            <h3 className="font-bold text-2xl">Warna</h3>
            <ul className="pt-1">
                <li className="color-picker bg-sky-950 mr-2 hover:scale-110 hover:border-2 duration-300 cursor-pointer" value="navy"></li>
                <li className="color-picker bg-gray-400 mr-2 hover:scale-110 hover:border-2 duration-300 cursor-pointer" value="grey"></li>
                <li className="color-picker bg-amber-100 mr-2 hover:scale-110 hover:border-2 duration-300 cursor-pointer" value="cream"></li>
                <li className="color-picker bg-yellow-950 mr-2 hover:scale-110 hover:border-2 duration-300 cursor-pointer" value="brown"></li>
            </ul>

            <hr className="my-4" />

            <div className="flex flex-row justify-between h-10 w-32 bg-gray-200 rounded-full mb-4 mx-auto 
                            md:mx-0">
                <div onClick={quantityDecrease} className="h-inherit w-10 py-2 bg-gray-300 rounded-full text-center cursor-pointer hover:bg-gray-400 duration-200">
                    <p className="font-bold">-</p>
                </div>
                <p className="py-2 font-bold">{quantity}</p>
                <div onClick={quantityIncrease} className="h-inherit w-10 py-2 bg-gray-300 rounded-full text-center cursor-pointer hover:bg-gray-400 duration-200">
                    <p className="font-bold">+</p>
                </div>
            </div>

            <div className="flex flex-row justify-center mb-4 md:justify-between">
                <button onClick={onClickBuyNow} className="group button bg-sky-600 mr-1 hover:bg-sky-500 hover:scale-110 duration-300 cursor-pointer">
                    <p className="text-white group-hover:text-black">Buy Now</p>
                </button>
                <button className="group button bg-sky-400 ml-1 hover:bg-sky-500 hover:scale-110 duration-300 cursor-pointer">
                    <p className="text-white group-hover:text-black">Add to Cart</p>
                </button>
            </div>

            <div className="w-full mt-4 pr-28 absolute bottom-0 ">
                <div className="h-fit w-full border-2 border-gray-200 py-2 pl-8 pr-2">
                    <p className="font-bold">Free Delivery</p>
                    <p className=""><u>Enter your postal code for delivery availability</u></p>
                </div>
                <div className="h-fit w-full border-2 border-gray-200 border-t-0 py-2 pl-8">
                    <p className="font-bold">Return Delivery</p>
                    <p className="">Free 30days Delivery Returns. <u>Details</u></p>
                </div>
            </div>
        </div>
    );
}

export default DetailDesc;