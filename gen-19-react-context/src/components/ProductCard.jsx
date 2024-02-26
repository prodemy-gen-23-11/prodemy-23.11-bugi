import React from "react";
import toRupiah from "../utils/formatter";

function ProductCard({ productData, onClick }) {

    return (
        <div className="relative font-gill w-72 h-[35rem] inline-block my-4" onClick={onClick}>
            <div className="bg-sky-200 h-72 rounded-2xl">
                <img src={productData.imageUrl} alt="product image"
                    className="h-full w-full hover:scale-105 duration-300" />
            </div>
            <div class="flex justify-between items-start">
                <h3 className="mt-4 text-xl font-bold">{productData.name}</h3>
                <p className="mt-4 text-lg">{toRupiah(productData.price*((100-productData.discount)/100))}</p>
            </div>
            <p className="mt-2">{productData.desc}</p>
            <p className="mt-1">★★★★★ (121)</p>
            <button className="absolute py-2 px-4 mt-2 bottom-2 text-zinc-50 font-bold bg-sky-400 rounded-full hover:bg-sky-600 hover:scale-105 duration-300">Add to Cart</button>
        </div>
    );
}

export default ProductCard;