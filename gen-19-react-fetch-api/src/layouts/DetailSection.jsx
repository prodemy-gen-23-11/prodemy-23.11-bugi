import React from "react";

function DetailSection({children}) {
    return (
        <>
            <div id="detail-section-container" 
            className="flex flex-col justify-center w-full mt-2
                        md:flex-row md:justify-between">
                {children}
            </div>
        </>
    );
}

export default DetailSection;