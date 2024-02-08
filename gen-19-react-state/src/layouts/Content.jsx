import React from "react";

function Content({children}) {
    return (
        <>
            <article className="py-4 px-8 my-2">
                {children}
            </article>
        </>
    );
}

export default Content;