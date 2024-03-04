import React from "react";

function FooterLink({ footerData }) {
    return (
        <div className="inline-block relative align-top w-48 mb-4">
            <h3 className="text-xl font-bold mb-2">{footerData.name}</h3>
            {footerData.links.map((links, index) => {
                return(
                    <a key={index} className="block my-2 cursor-pointer">{links}</a>
                ) 
            })}
        </div>
    );
}

export default FooterLink;