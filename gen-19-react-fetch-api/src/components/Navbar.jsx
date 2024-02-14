import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navbar" className="relative h-fit py-3.5 px-8 shadow-sm">
            <div className="flex flex-row flex-wrap justify-center items-center md:justify-between">
                <Link to="/">
                    <h2 id="title" className="inline-block m-0 text-sky-600 text-3xl font-bold">Shopcart</h2>
                </Link>
                <div className="inline-flex flex-row flex-wrap justify-center items-baseline md:flex-nowrap md:justify-between">
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
                    <a className="text-xl text-sky-600 py-0 px-4 hover:font-bold" href="#">Deals</a>
                    <a className="text-xl text-sky-600 py-0 px-4 hover:font-bold" href="#">What's New</a>
                    <a className="text-xl text-sky-600 py-0 px-4 hover:font-bold" href="#">Delivery</a>
                    <form id="search-bar" className="text-sm py-0 px-4" action="">
                        <input className="bg-zinc-100 font-gill text-3.5 py-1 px-4 border-none rounded-lg placeholder:text-gray-500 placeholder:text-base" type="text" placeholder="Search Product" />
                    </form>
                    <a className="text-xl text-sky-600 py-0 px-4 hover:font-bold account" href="#">Account</a>
                    <a className="text-xl text-sky-600 py-0 px-4 hover:font-bold cart" href="#">Cart</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;