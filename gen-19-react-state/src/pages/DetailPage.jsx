import React from "react";
import Content from "../layouts/Content";
import DetailSection from "../layouts/DetailSection";
import {productData} from "../data/ProductData";
import DetailPreview from "../components/DetailPreview";
import DetailDesc from "../components/DetailDesc";

function DetailPage() {
    const id = 1;

    return(
        <>
            <Content>
                <DetailSection>
                    <DetailPreview product={productData.find((item) => item.id == id)} />
                    <DetailDesc product={productData.find((item) => item.id == id)} />
                </DetailSection>
            </Content>
        </>
    );
}

export default DetailPage;