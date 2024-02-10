import React from "react";
import { useNavigate } from "react-router-dom";
import { categoryTitle, categoryData } from '../data/CategoryData'
import { productTitle, productData } from '../data/ProductData'
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Content from "../layouts/Content";
import HomeSection from "../layouts/HomeSection";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../layouts/Footer";

function HomePage() {
    const navigate = useNavigate();

    const onClickRedirect = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <>
            <Navbar />
            <Banner />
            <Content>
                <HomeSection title={categoryTitle}>
                    {categoryData.map(item =>
                        <CategoryCard categoryData={item} key={item.id} />
                    )}
                </HomeSection>

                <HomeSection title={productTitle}>
                    {productData.map((item) => 
                        <ProductCard productData={item} key={item.id} onClick={() => onClickRedirect(item.id)} />
                    )}
                </HomeSection>
            </Content>
            <Footer />
        </>
    );
}

export default HomePage;