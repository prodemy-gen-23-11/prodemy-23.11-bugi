import React from "react";

function Content({children}) {
    return (
        <>
            <div className="py-4 px-8 my-2">
                {children}
            </div>
        </>
    );
}

export default Content;