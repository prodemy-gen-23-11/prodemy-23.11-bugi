import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserIcon, CartIcon } from "../assets/Icons";
import { useEffect } from "react";

function Navbar() {
    const [cartItem, setCartItem] = useState(0);

    const { cartData } = useSelector((state) => state.cart);

    useEffect(() => setCartItem(cartData?.length));

    return (
        <div id="navbar" className="relative h-fit py-3 px-8 shadow-sm">
            <div className="flex flex-row flex-wrap justify-center items-center md:justify-between">
                <Link to="/">
                    <h2 id="title" className="inline-block m-0 text-sky-600 text-3xl font-bold">Shopcart</h2>
                </Link>
                <div className="inline-flex flex-row flex-wrap justify-center items-center md:flex-nowrap md:justify-between">
                    <form className="font-gill text-xl py-0 px-4" action="">
                        <select className="font-gill text-inherit text-sky-600 py-1 px-2.5 border-none rounded-lg">
                            <option className="bg-cyan-300 text-sky-600" disabled selected value="categories">Categories</option>
                            <option className="bg-cyan-300 text-sky-600" value="sofa">Sofa</option>
                            <option className="bg-cyan-300 text-sky-600" value="meja">Meja</option>
                            <option className="bg-cyan-300 text-sky-600" value="kursi">Kursi</option>
                            <option className="bg-cyan-300 text-sky-600" value="rak">Rak Buku</option>
                            <option className="bg-cyan-300 text-sky-600" value="lemari">Lemari</option>
                            <option className="bg-cyan-300 text-sky-600" value="kasur">Kasur</option>
                        </select>
                    </form>
                    <a className="text-xl text-sky-600 py-0 px-4 " href="#">Deals</a>
                    <a className="text-xl text-sky-600 py-0 px-4 " href="#">What's New</a>
                    <a className="text-xl text-sky-600 py-0 px-4 " href="#">Delivery</a>
                    <form id="search-bar" className="text-sm py-0 px-4" action="">
                        <input className="font-gill w-44 text-lg py-1 border-b-2 border-sky-400 outline-none placeholder:text-sky-600 placeholder:text-base focus:w-48 focus:border-sky-600 focus:placeholder-transparent duration-300" type="text" placeholder="Search Product" />
                    </form>
                    <div className="flex flex-row items-center mr-2 group cursor-pointer">
                        <UserIcon className="inline-block h-7 w-7 text-sky-600 group-hover:scale-110 duration-300" />
                        <a className="text-xl text-sky-600 px-2" href="#">Account</a>
                    </div>
                    <Link to="/cart">
                        <div className="relative flex flex-row items-center mr-2 group cursor-pointer">
                            {cartItem > 0 ? (
                            <div className="absolute w-2.5 h-2.5 text-center rounded-full bg-red-400 top-0 left-4 group-hover:scale-110 duration-300 z-20">
                                <p className="text-[0.5rem] text-white top-1 group-hover:scale-110 duration-300 z-30">{cartItem}</p>
                            </div>
                            ) : null}
                            
                            <CartIcon className="inline-block h-6 w-6 text-sky-600 group-hover:scale-110 duration-300 z-10" />
                            <a className="text-xl text-sky-600 px-2" href="#">Cart</a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;