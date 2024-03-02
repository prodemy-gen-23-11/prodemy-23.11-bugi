import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserIcon, CartIcon } from "../assets/Icons";
import { useEffect } from "react";
import { resetAuthAction } from "../store/reducers/authSlice";

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [cartItem, setCartItem] = useState(0);
    const [showFloatMenu, setShowFloatMenu] = useState(false);

    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.token !== "");
    const isAdmin = useSelector((state) => isLoggedIn && state.auth.user.role === "admin");
    const { cartData } = useSelector((state) => state.cart);

    const onClickLogin = () => {
        navigate("/login");
    }

    const onClickLogout = () => {
        dispatch(resetAuthAction());
        navigate("/login");
    }

    const onClickRedirectAdmin = () => {
        navigate("/admin");
    }

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
                    <div onClick={() => setShowFloatMenu(!showFloatMenu)} className="relative flex flex-row items-center mr-2 group cursor-pointer">
                        <UserIcon className="inline-block h-7 w-7 text-sky-600 group-hover:scale-110 duration-300" />
                        <p className="text-xl text-sky-600 px-2" href="#">
                            {isLoggedIn ? "Hi, " + user.name : "Hi, Guest"}
                        </p>
                        {showFloatMenu && (
                            <>
                                <div className="absolute w-80 bg-white -left-28 top-10 py-2 border rounded-lg drop-shadow-md z-50">
                                    <div className="flex flex-row justify-between items-center px-4">
                                        {isLoggedIn ? (
                                            <>
                                                <p>Hello {user.name}, you are logged in!</p>
                                                <button onClick={onClickLogout} className="py-1 px-4 rounded-lg bg-gray-400 text-zinc-50 hover:bg-gray-500 duration-300">Logout?</button>
                                            </>
                                        ) : (
                                            <>
                                                <p>Hello guest, you aren't logged in!</p>
                                                <button onClick={onClickLogin} className="py-1 px-4 rounded-lg bg-gray-400 text-zinc-50 hover:bg-gray-500 duration-300">Login</button>
                                            </>
                                        )}
                                    </div>
                                    {isAdmin ? (
                                        <div className="pt-2 text-center">
                                            <button onClick={onClickRedirectAdmin} className="py-1 px-4 rounded-lg bg-sky-400 text-zinc-50 hover:bg-sky-500 duration-300">
                                                Go to Admin page
                                            </button>
                                        </div>
                                    ) : null}
                                </div>
                            </>
                        )}
                    </div>
                    <Link to="/cart">
                        <div className="relative flex flex-row items-center mr-2 group cursor-pointer">
                            {cartItem > 0 ? (
                                <div className="absolute w-2.5 h-2.5 text-center rounded-full bg-red-400 top-0 left-4 group-hover:scale-110 duration-300 z-20">
                                    <p className="text-[0.5rem] text-white top-1 group-hover:scale-110 duration-300 z-30">{cartItem}</p>
                                </div>
                            ) : null}

                            <CartIcon className="inline-block h-6 w-6 text-sky-600 group-hover:scale-110 duration-300 z-10" />
                            <p className="text-xl text-sky-600 px-2">Cart</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;