import React from "react";
import { useParams } from "react-router-dom";
import Content from "../layouts/Content";
import DetailSection from "../layouts/DetailSection";
import DetailPreview from "../layouts/DetailPreview";
import DetailDesc from "../layouts/DetailDesc";
import Navbar from "../components/Navbar";
import Footer from "../layouts/Footer";
import { productData } from "../data/ProductData";

function DetailPage() {
    const {id} = useParams();

    const selectedProduct = productData.find((product) => product.id === parseInt(id))

    return (
        <>
            <Navbar />
            <Content>
                <DetailSection>
                    <DetailPreview product={selectedProduct} />
                    <DetailDesc product={selectedProduct} />
                </DetailSection>
            </Content>
            <Footer />
        </>
    );
}

export default DetailPage;