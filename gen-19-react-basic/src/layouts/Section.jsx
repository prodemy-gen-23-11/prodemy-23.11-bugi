import React, { Children } from "react";

function Section(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <div className="flex flex-row flex-wrap justify-between">
                {/* {Children};     */}
            </div>
        </div>
    );
}

export default Section;