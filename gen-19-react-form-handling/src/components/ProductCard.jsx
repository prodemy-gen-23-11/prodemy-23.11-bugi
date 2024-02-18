import React from "react";

function ProductCard({ productData, onClick }) {

    return (
        <div className="font-gill w-72 inline-block relative my-4" onClick={onClick}>
            <div className="bg-gray-200 h-72 rounded-2xl">
                <img src={productData.imageUrl} alt="product image"
                    className="h-full w-full hover:scale-105 duration-300" />
            </div>
            <div class="flex justify-between items-start">
                <h3 className="mt-4 text-xl font-bold">{productData.name}</h3>
                <p className="mt-4 text-lg">{productData.price}</p>
            </div>
            <p className="mt-2">{productData.desc}</p>
            <p className="mt-1">★★★★★ (121)</p>
            <button className="py-2 px-4 mt-2 text-zinc-200 bg-gray-600 rounded-full hover:text-zinc-600 hover:bg-gray-300 hover:scale-105 duration-300">Add to Cart</button>
        </div>
    );
}

export default ProductCard;