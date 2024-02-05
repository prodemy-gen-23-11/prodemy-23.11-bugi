import './App.css'
import ProductCard from "./components/ProductCard";

function App() {
  const productName1 = "Sofa Pillo Canvas Longname";
  const productImage1 = "https://asset.morefurniture.id/PROCELLA/PILLO/1.webp";
  const productPrice1 = "Rp1.268.000";
  const productDesc1 = "Sofa 2 dudukan, dengan chaise longue/vissle 4 pilihan warna";

  return (
    <>
      <ProductCard name={productName1} imageUrl={productImage1} price={productPrice1} desc={productDesc1} />
    </>
  )
}

export default App;
