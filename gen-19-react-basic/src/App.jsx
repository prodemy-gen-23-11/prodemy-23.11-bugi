import React from 'react'
import './App.css'
import Header from './layouts/Header'
// import Content from './layouts/Content'
// import Section from './layouts/Section'
import categoryData from './data/CategoryData'
import productData from './data/ProductData'
import footerData from './data/FooterData'
import CategoryCard from './components/CategoryCard'
import ProductCard from './components/ProductCard'
import FooterLink from './components/FooterLink'

function App() {

  return (
    <>
      <Header />
      {/* categories section */}
      <div className="py-4 px-8 mt-6">
        <h2 className="text-2xl font-bold mb-2">Shop Our Top Categories</h2>
        <div className="flex flex-row flex-wrap justify-between">
          {categoryData.map(item =>
            <CategoryCard categoryData={item} key={item.id} />
          )}
        </div>
      </div>

      {/* product section */}
      <div className="py-2 px-8 mt-2">
        <h2 className="text-2xl font-bold">Todays Best Deals For You!</h2>
        <div className="flex flex-row flex-wrap justify-between">
          {productData.map((item) => {
            return <ProductCard productData={item} key={item.id} />
          })}
        </div>
      </div>

      {/* footer section */}
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

export default App;
