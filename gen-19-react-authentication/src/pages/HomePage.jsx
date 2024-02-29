import React from "react";
import useSWR from "swr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { categoryTitle } from '../data/CategoryData'
import { productTitle } from '../data/ProductData'
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

    const getData = (url) => axios.get(url).then((response) => response.data);

    const products = useSWR("http://localhost:3000/products", getData);
    const categories = useSWR("http://localhost:3000/category", getData);

    if (!products.isLoading && !categories.isLoading) return (
        <>
            <Navbar />
            <Banner />
            <Content>
                <HomeSection title={categoryTitle}>
                    {categories?.data?.map(item =>
                        <CategoryCard categoryData={item} key={item.id} />
                    )}
                </HomeSection>

                <HomeSection title={productTitle}>
                    {products?.data?.map((item) => 
                        <ProductCard productData={item} key={item.id} onClick={() => onClickRedirect(item.id)} />
                    )}
                </HomeSection>
            </Content>
            <Footer />
        </>
    );
}

export default HomePage;