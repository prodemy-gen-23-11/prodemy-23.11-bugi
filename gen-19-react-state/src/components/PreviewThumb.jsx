import React from "react";

function PreviewThumb(props) {
    const {imageSrc, onClick} = props;

    return (
        <div class="image-thumb-div" onClick={() => onClick(imageSrc)}>
            <img class="h-full w-full hover:scale-110 duration-300"
                src={imageSrc}
                alt="" />
        </div>
    );
}

export default PreviewThumb;