import React, { useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import { useParams } from "react-router-dom";
import Content from "../layouts/Content";
import DetailSection from "../layouts/DetailSection";
import DetailPreview from "../layouts/DetailPreview";
import DetailDesc from "../layouts/DetailDesc";
import Navbar from "../components/Navbar";
import Footer from "../layouts/Footer";

function DetailPage() {
    const {id} = useParams();

    const getData = (url) => axios.get(url).then((response) => response.data);

    const selectedProduct = useSWR(`http://localhost:3000/products/${id}`, getData);
    console.log(selectedProduct.data)

    useEffect(() => window.scrollTo(0,0));

    if (!selectedProduct.isLoading) return (
        <>
            <Navbar />
            <Content>
                <DetailSection>
                    <DetailPreview productPreviews={selectedProduct.data.previews} />
                    <DetailDesc 
                        productName={selectedProduct.data.name} 
                        productDesc={selectedProduct.data.desc} 
                        productPrice={selectedProduct.data.price} 
                        productPriceMax={selectedProduct.data.priceMax} />
                </DetailSection>
            </Content>
            <Footer />
        </>
    );
}

export default DetailPage;