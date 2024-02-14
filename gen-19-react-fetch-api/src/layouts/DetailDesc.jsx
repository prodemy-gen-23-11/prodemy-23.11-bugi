import React from "react";

function DetailDesc({ product }) {
    return (
        <div id="desc-container"
            className="flex flex-col w-full text-center mt-8
                        md:inline-flex md:text-start md:w-[45%] md:mt-0 md:pr-28">
            <h1 className="font-extrabold text-3xl">{product.name}</h1>
            <p className="pt-2">{product.desc}</p>
            <p className="pt-1">★★★★★ (121)</p>

            <hr className="my-4" />

            <h2 className="font-bold text-2xl">{product.price} - {product.priceMax}</h2>
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

            <div className="flex flex-row justify-around py-2 h-10 w-32 bg-gray-200 rounded-full mb-4 mx-auto 
                            md:mx-0">
                <p className="inline-block font-bold cursor-pointer">-</p>
                <p className="inline-block font-bold">1</p>
                <p className="inline-block font-bold cursor-pointer">+</p>
            </div>

            <div className="flex flex-row justify-center mb-4 md:justify-between">
                <button className="group button bg-sky-600 mr-1 hover:bg-sky-300 duration-300 cursor-pointer">
                    <p className="text-white group-hover:text-black">Buy Now</p>
                </button>
                <button className="group button border-sky-600 border-2 ml-1 hover:bg-sky-300 duration-300 cursor-pointer">
                    <p className="text-black">Add to Cart</p>
                </button>
            </div>

            <div className="mt-4 md:mt-20">
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