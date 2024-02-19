import React from "react";

function DetailThumb({imageSrc, onClick}) {

    return (
        <div className="image-thumb-div" onClick={onClick}>
            <img className="h-full w-full rounded-lg hover:scale-110 duration-300"
                src={imageSrc}
                alt="" />
        </div>
    );
}

export default DetailThumb;