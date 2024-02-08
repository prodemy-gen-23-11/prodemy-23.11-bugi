import React, { useState } from "react";
import PreviewThumb from "./PreviewThumb";

function PreviewProduct({ product }) {
    const [mainSrc, setSrc] = useState(product.previews[0]);

    const changeSrc = (newSrc) => {
        setSrc(newSrc);
    };

    return (
        <div id="preview-container" 
            className="inline-flex flex-col w-full
                        md:w-[45%]">
            <div className="bg-gray-200 h-[25rem] md:h-[30rem] w-full rounded-2xl mb-6">
                <img className="h-full w-[30rem] m-auto hover:scale-110 duration-300"
                    src={mainSrc}
                    alt="" />
            </div>
            <div className="h-40 w-full overflow-auto whitespace-nowrap">
                {product.previews.map((url) =>
                    <PreviewThumb imageSrc={url} onClick={() => changeSrc(url)} />
                )}
            </div>
        </div>
    );
}

export default PreviewProduct;