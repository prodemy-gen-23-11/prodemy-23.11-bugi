import React, { useState } from "react";
import DetailThumb from "../components/DetailThumb";

function DetailPreview({ productPreviews }) {

    const [mainSrc, setSrc] = useState(productPreviews[0]);

    const changeSrc = (newSrc) => {
        setSrc(newSrc);
    };

    return (
        <div id="preview-container"
            className="inline-flex flex-col w-full
                        md:w-[45%]">
            <div className="bg-sky-200 h-[25rem] md:h-[30rem] w-full rounded-2xl mb-6">
                <img className="h-full w-[30rem] m-auto hover:scale-110 duration-300"
                    src={mainSrc}
                    alt="" />
            </div>
            <div className="h-40 w-full overflow-auto whitespace-nowrap">
                {productPreviews?.map((url, index) =>
                    <DetailThumb key={index} imageSrc={url} onClick={() => changeSrc(url)} />
                )}
            </div>
        </div>
    );
}

export default DetailPreview;