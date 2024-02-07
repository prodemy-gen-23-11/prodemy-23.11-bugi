import React from "react";
import { categoryTitle, categoryData } from '../data/CategoryData'
import { productTitle, productData } from '../data/ProductData'
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Content from "../layouts/Content";
import HomeSection from "../layouts/HomeSection";
import Banner from "../components/Banner";

function HomePage() {
    return (
        <>
            <Banner />
            <Content>
                <HomeSection title={categoryTitle}>
                    {categoryData.map(item =>
                        <CategoryCard categoryData={item} key={item.id} />
                    )}
                </HomeSection>

                <HomeSection title={productTitle}>
                    {productData.map((item) => {
                        return <ProductCard productData={item} key={item.id} />
                    })}
                </HomeSection>
            </Content>
        </>
    );
}

export default HomePage;