import React from "react";

function CategoryCard({ categoryData }) {
    return (
        <div className="inline-block relative rounded-lg w-40 h-48 my-6 text-center">
            <img src={categoryData.imageUrl}
                className="w-inherit h-inherit rounded-lg" />
            <div className="relative bottom-52 pt-0.5 px-6 bg-white drop-shadow-lg rounded-lg w-fit h-fit mx-auto">
                <p className="text-lg font-bold">{categoryData.name}</p>
            </div>
        </div>
    );
}

export default CategoryCard;