import React from "react";
import categoryData from '../data/CategoryData'
import productData from '../data/ProductData'
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Content from "../layouts/Content";
import HomeSection from "../layouts/HomeSection";

function HomePage() {
    return (
        <Content>
            <HomeSection title="Shop Our Top Categories" style="text-red-400">
                {categoryData.map(item =>
                    <CategoryCard categoryData={item} key={item.id} />
                )}
            </HomeSection>

            <HomeSection title="Todays Best Deals For You!" style="">
                {productData.map((item) => {
                    return <ProductCard productData={item} key={item.id} />
                })}
            </HomeSection>
        </Content>
    );
}

export default HomePage;