import React from "react";
import FooterLink from "../components/FooterLink";
import footerData from '../data/FooterData'

function Footer() {
    return (
        <>
            <hr />
            <div className="py-4 px-8 mt-2">
                <div className="flex flex-row flex-nowrap justify-between">
                    <div className="inline-block relative align-top w-80 mb-4 mr-4">
                        <h2 className="text-3xl font-bold mb-4">Shopcart</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, molestias. Odio incidunt voluptas iste ipsum consectetur error aut, quaerat nisi quae culpa perferendis harum est unde libero reiciendis expedita eos!</p>
                    </div>
                    {footerData.map((item) => {
                        return <FooterLink footerData={item} key={item.id} />
                    })}
                </div>
            </div>
        </>
    );
}

export default Footer;