import React from "react";

function ProductCard(props) {
    return (
        <div className="font-gill w-72 inline-block relative my-4 border-2 rounded-3xl">
            <div className="bg-gray-200 h-72 rounded-2xl">
                <img src={props.imageUrl} alt="product image"
                    className="h-full w-full hover:scale-105 duration-300" />
            </div>
            <div class="flex justify-between items-start">
                <h3 className="mt-4 text-xl font-bold">{props.name}</h3>
                <p className="mt-4 text-lg">{props.price}</p>
            </div>
            <p className="mt-2">{props.desc}</p>
            <p className="mt-1">★★★★★ (121)</p>
            <button className=" bg-white mt-2 border border-solid border-black rounded-full hover:bg-gray-200 hover:border-2 hover:border-black duration-300">Add to Cart</button>
        </div>
    );
}

export default ProductCard;