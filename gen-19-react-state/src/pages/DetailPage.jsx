import React from "react";
import Content from "../layouts/Content";
import DetailSection from "../layouts/DetailSection";
import {productData} from "../data/ProductData";
import PreviewProduct from "../components/PreviewProduct";
import DetailDesc from "../components/DetailDesc";

function DetailPage() {
    const id = 1;

    return(
        <>
            <Content>
                <DetailSection>
                    <PreviewProduct product={productData[id-1]} />
                    <DetailDesc product={productData[id-1]} />
                </DetailSection>
            </Content>
        </>
    );
}

export default DetailPage;