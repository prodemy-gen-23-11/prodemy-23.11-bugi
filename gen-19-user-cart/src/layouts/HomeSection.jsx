import React from "react";

function HomeSection({children, title}){
    return(
        <>
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-row flex-wrap justify-between">
                {children}
            </div>
        </>
    );
}

export default HomeSection;