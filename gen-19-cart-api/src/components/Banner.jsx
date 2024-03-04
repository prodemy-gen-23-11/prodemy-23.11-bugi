import React from "react";
import bannerData from "../data/BannerData";

function Banner() {
    const {title, desc, buttonText, imageUrl, imageDesc} = bannerData;

    return(
        <div id="banner" className="font-gill relative w-full h-[25rem] bg-blue-300">
            <img src={imageUrl} alt={imageDesc} 
                className="w-inherit h-inherit object-cover" />
            <div className="absolute px-16 w-2/5 top-12 leading-normal">
                <h1 className="text-[2.5rem] text-sky-200 font-bold">{title}</h1>
                <p className="text-[1.1rem] my-4 text-zinc-50">{desc}</p>
                <button className="bg-sky-500 rounded-full border-0 text-zinc-50 font-semibold w-fit py-2 px-4 my-4 duration-500
                    hover:bg-sky-200 hover:scale-105 hover:text-blue-600">{buttonText}</button>
            </div>
        </div>
    );
}

export default Banner;