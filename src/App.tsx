// import File from "../src/component/File/File.tsx";
import './App.css'
import ProductList from './component/AdminProductsCard/ProductList.tsx';
import CategoryCard from './component/CategoryCard/CategoryCard.tsx';
import Footer from "./component/Footer/Footer.tsx";
import ProductGrid from './component/ProductCard/ProductGrid.tsx';
import PurchaseList from './component/PurchaseList/PurchaseList.tsx';

function App() {

  const products = [
    {
      id: 1,
      name: "Sombras de ojos",
      image: "/test-images/maybelline-combo.jpg",
      price: 15000,
      discountPrice: 10000,
      discountPercent: 25,
    },
    {
      id: 2,
      name: "Sombras de ojos",
      image: "/test-images/maybelline-combo.jpg",
      price: 15000,
    },
    {
      id: 3,
      name: "Sombras de ojos",
      image: "/test-images/maybelline-combo.jpg",
      price: 20000,
    },
  ];

  return (
    // <File/>
    <main>
      {/* <CategoryCard></CategoryCard>
      <ProductList></ProductList> */}
      <PurchaseList></PurchaseList>
      <ProductGrid products={products} />
      <Footer></Footer>
    </main>

  )
}

export default App
